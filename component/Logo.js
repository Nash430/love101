
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { Component, useState, useEffect } from "react";

class Logo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            


        }
    }


    render() {
        const { isLoading } = this.state
        return (
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