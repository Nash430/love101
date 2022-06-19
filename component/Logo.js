
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Layout from './Layout'
import React, { Component, useState, useEffect } from "react";
import { Container, Row, Col, Button, } from "react-bootstrap";
import { Modal } from 'react-native-web';
import router from 'next/router';
import { FaDiceFive } from 'react-icons/fa';

class Logo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            setIsLoding: true


        }
        this.SelectNum = this.SelectNum.bind(this);


    }

    ComponentDidMount() {

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
        const { isLoading } = this.state
        return (
            // style={{width: "100%"}} className='logo_bg'
            // style={{ marginTop: "50%" }}
            // logoFull
            <div className='logoFull'   >
                <div className='logoAnimate' style={{ width: "100%", height: "100%",  display: "flex",  }}  >
                    <img className='logo_bg' src='./images/logo_bg.png' />
                    <img className='logo_ball' src='./images/logo_ball.png' />
                </div>
            </div>
        );
    }

}

export default Logo