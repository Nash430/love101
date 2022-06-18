import Link from 'next/link'
import Layout from '../component/Layout'
import React, { Component, useState } from "react";
import { Container, Row, Col, Button, } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import router from 'next/router';

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

const setLoading ={
  

}

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
    this.SelectNum = this.SelectNum.bind(this);



}





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
  return (
    <div >
      <Layout>
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

          <svg> <animate></animate> </svg>

        </Container>
      </Layout>
    </div>
  );
}

}

export default Index