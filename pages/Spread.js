/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Header from '../component/Header'
import Layout from '../component/Layout'
import React, { Component, useState } from "react";
import { Container, Row, Col, Collapse, Button, CardBody, Card } from "reactstrap";
import { FaRegDotCircle, FaUndoAlt } from "react-icons/fa";
import { withRouter } from 'next/router';
import { Modal } from 'react-native-web';
import Image from 'next/image'
import card from "./card.json";



class Spread extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            thinkCircle: true,
            showResult: false
        }
        this.Spread = this.Spread.bind(this);

    }

    componentDidMount = () => {
    }


    Spread = () => {

        this.setState({
            thinkCircle: false,
            showResult: true
        })
        const AllResult = []
        var arr = card.cardData;
        var cardNum = this.props.router.query.choose
        for (var i = 0; i < cardNum; i++) {
            var index = Math.floor(Math.random() * arr.length);
            AllResult.push(arr[index]);
            arr.splice(index, 1);


            console.log(AllResult, "AllResult")
            this.setState({
                AllResult: AllResult,

            })


        }

    }

    render() {
        const { showResult, thinkCircle, SelectNum, ShowImgUrl, showName, AllResult } = this.state;
        return (
            <div >
                <Layout>
                    <Container >
                        {/* <div > */}
                            <div className='DotStyle' >
                                {/* <FaRegDotCircle onClick={this.Spread} className="dotIcon" /> */}
                                {/* <div>

                                </div> */}

                                {/* <div><img className='spreadLOGO' src='./images/logo_bg.png' /></div> */}
                                <div><img onClick={this.Spread} className='spreadBALL' src='./images/logo_ball.png' /></div>

                            </div>
                            <div>您選擇抽{this.props.router.query.choose}張牌</div>
                            <div>請冥想並按下按鈕...</div>

                        {/* </div> */}
                        <Modal visible={showResult}>
                            <Layout>
                                <div className='showResult'>
                                    {AllResult && AllResult.length ?
                                        AllResult.map((value, item) => (

                                            <div className="draw-wrapper" key={item}>
                                                <div className="card-set">
                                                    <div className="card" >
                                                        <img className='tarot' src={value.url} key={item.url} />
                                                        <span className='card-name'>{value.name}</span>
                                                    </div>
                                                </div>
                                            </div>

                                        )) : null}
                                </div>
                            </Layout>
                        </Modal>
                    </Container>
                </Layout>
            </div>
        );
    }

}

export default withRouter(Spread)