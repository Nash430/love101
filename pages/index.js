/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Layout from '../component/Layout'
import Logo from '../component/Logo';
import React, { Component, useState, useEffect } from "react";
// import { LoadingScreen } from "react-loading-screen";
import { Container, Row, Col, Button, } from "react-bootstrap";
import router from 'next/router';



class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      setIsLoding: true


    }
    this.SelectNum = this.SelectNum.bind(this);

  }



  SelectNum = (e) => {
    var cardNum = e.currentTarget.value


    // ˇˇˇˇˇˇˇˇˇ

    router.push({
      pathname: '/Spread',
      query: {
        choose: cardNum
      }

    });

    // ^^^^^^^^   切換過去頁面的時候，順便把當前所選取的value傳過去Spread頁面

  }

  render() {
    const { isLoading } = this.state
    return (
      <div >
        
        <Layout>
        <Logo />
          <Container >
            <div className='indexRow'>
              <Col><Button value={1} onClick={this.SelectNum}><span className='btnSpan' > 1 </span></Button></Col>
              <Col><Button value={2} onClick={this.SelectNum}><span className='btnSpan' > 2 </span></Button></Col>
              <Col><Button value={3} onClick={this.SelectNum}><span className='btnSpan' > 3 </span></Button></Col>
              <Col><Button value={4} onClick={this.SelectNum}><span className='btnSpan' > 4 </span></Button></Col>
              <Col><Button value={5} onClick={this.SelectNum}><span className='btnSpan' > 5 </span></Button></Col>
              <Col><Button value={6} onClick={this.SelectNum}><span className='btnSpan' > 6 </span></Button></Col>
              <Col style={{ width: "200%" }}><p className='chooseTxt'>請選擇要抽幾張牌</p></Col>
            </div>
          </Container>
        </Layout>
      </div>
    );
  }

}

export default Index