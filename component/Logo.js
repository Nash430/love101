
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
            <div style={{marginTop: "50%"}}>

                <img style={{ width: "100vh", height: "100vh"  }} className='logo_bg' src='./images/logo_bg.png' />
                <img style={{ width: "100vh", height: "100vh" }} className='logo_ball' src='./images/logo_ball.png' />

            </div>
        );
    }

}

export default Logo