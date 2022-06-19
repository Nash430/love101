/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Layout from '../component/Layout'
import Logo from '../component/Logo';
import React, { Component, useState, useEffect } from "react";
// import { LoadingScreen } from "react-loading-screen";
import { Container, Row, Col, Button, } from "react-bootstrap";
import { Modal } from 'react-native-web';
// import 'bootstrap/dist/css/bootstrap.min.css';
import router from 'next/router';
import { FaDiceFive } from 'react-icons/fa';

const indexRow = {
  display: "grid",
  height: "100%",
  justifyContent: "center",
  gridTemplateColumns: "50% 50%",
  gridTemplateRows: "30% 30% 30% 10%",
  alignItems: "center",
  textAlign: "center",
  padding: "6%",
  flexWrap: "wrap",
  justifyContent: "center",
  flexDirection: "column",

}

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      setIsLoding: true


    }
    this.SelectNum = this.SelectNum.bind(this);
    // setTimeout(() => {
    //   // this.isLoading(false);
    //   this.state = {isLoading: false}
    // }, 3000);

  }

  ComponentDidMount() {
    // setTimeout(() => {
    //   this.isLoading(false);
    // }, 3000);
  }



  // useEffect = (e) => {
  // fetch("https://api.imgflip.com/get_memes")
  //     .then((res) => res.json())
  //     .then((data) => setMemes(data));

  // setTimeout(() => {
  //   isLoding(false);
  // }, 3000);
  // }





  SelectNum = (e) => {
    var cardNum = e.currentTarget.value
    router.push({
      pathname: '/Spread',
      query: {
        choose: cardNum
      }

    });

  }

  render() {
    const { isLoading } = this.state
    return (
      <div >
        
        <Layout>
        <Logo />
          <Container >
            <div style={indexRow}>
              <Col><Button value={1} onClick={this.SelectNum}><span className='btnSpan' >1</span></Button></Col>
              <Col><Button value={2} onClick={this.SelectNum}><span className='btnSpan' >2</span></Button></Col>
              <Col><Button value={3} onClick={this.SelectNum}><span className='btnSpan' >3</span></Button></Col>
              <Col><Button value={4} onClick={this.SelectNum}><span className='btnSpan' >4</span></Button></Col>
              <Col><Button value={5} onClick={this.SelectNum}><span className='btnSpan' >5</span></Button></Col>
              <Col><Button value={6} onClick={this.SelectNum}><span className='btnSpan' >6</span></Button></Col>
              <Col style={{ width: "190%" }}><p className='chooseTxt'>請選擇要抽幾張牌</p></Col>
            </div>
          </Container>
        </Layout>
      </div>
    );
  }

}

export default Index