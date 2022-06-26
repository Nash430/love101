/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Header from '../component/Header'
import Layout from '../component/Layout'
import React, { Component, useState } from "react";
import { Container, } from "reactstrap";
import { GrActions } from "react-icons/gr";
import { withRouter } from 'next/router';
import { Modal } from 'react-native-web';
import card from "./card.json";



class Spread extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showResult: false
        }
        this.Spread = this.Spread.bind(this);

    }

    componentDidMount = () => {
    }


    Spread = () => {

        this.setState({
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
                CardResult: AllResult,

            })


        }

    }

    render() {
        const { showResult, CardResult } = this.state;
        return (
            <div >
                <Layout>
                    <Container >

                        <div className='DotStyle' >
                            <div >
                            <img  className='spinBG' onClick={this.Spread} src='./images/spinBG.png' />
                            <img  className='spinBall' src='./images/spinBall.png' />
                                
                               

                            </div>
                            <div style={{ color: "#f5c03f", fontWeight: "500" }} >您選擇抽{this.props.router.query.choose}張牌</div>
                            <div style={{ color: "#f5c03f", fontWeight: "500" }} >請心中想著問題 冥想並按下按鈕...</div>

                        </div>

                        <Modal visible={showResult}>
                            <Layout>
                                <div className='showResult'>
                                    {CardResult && CardResult.length &&
                                        CardResult.map((value, item) => (

                                            // { showResult ?  <p>註冊成功</p>   :  <p>註冊失敗sorry</p>  }
                                            // 以上這兩個都是布林值的開關
                                            // { showResult (如果前面這個東西是true)  &&   (就會顯示後面的東西)  }                                          

                                            <div className="draw-wrapper" key={item}>
                                                <div className="card-set">
                                                    <div className="card" >
                                                        <img className='tarot' src={value.url} key={item.url} />
                                                        <span className='card-name'>{value.name}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

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