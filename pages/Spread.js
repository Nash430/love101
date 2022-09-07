/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { Component, useState, useRef, Suspense } from "react";
import { withRouter } from "next/router";
import { TiArrowLeftThick } from "react-icons/ti";
import { Row, Col, Popconfirm } from "antd";
import router from "next/router";
import "antd/dist/antd.css";
import card from "./card.json";
import Layout from "../component/Layout";
import Header from "../component/Header";
class Spread extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thinkCircle: true,
      showResult: false,
      cardIMG: "",
      cardDisplay: "",
      headerChangeContent: "",
    };
    this.Spread = this.Spread.bind(this);
  }

  componentDidMount = () => {};

  IconClick = (e) => {
    router.push({
      pathname: "/",
    });
  };

  Spread = () => {
    this.setState({
      thinkCircle: false,
      showResult: true,
    });
    const AllResult = [];
    var arr = card.cardData;
    var cardNum = this.props.router.query.choose;
    for (var i = 0; i < cardNum; i++) {
      var index = Math.floor(Math.random() * arr.length);
      AllResult.push(arr[index]);
      arr.slice(index, 1);

      console.log(AllResult, "AllResult");
      this.setState({
        AllResult: AllResult,
      });
    }

    //ANTD RWD test
    if (AllResult.length >= 4) {
      if (AllResult.length == 5) {
        this.setState({
          cardDisplay: "loveCard",
          cardIMG: "cardStyle05",
        });
      } else if (AllResult.length == 6) {
        this.setState({
          cardDisplay: "cardStyle06",
          // cardIMG: "IMGStyle06",
        });
      } else if (AllResult.length >= 7 && AllResult.length <= 9) {
        this.setState({
          cardDisplay: "cardStyle789",
          // cardIMG: "IMGStyle06",
        });
      } else {
        this.setState({
          cardIMG: "cardStyle04",
        });
      }
    } else if (AllResult.length == 3) {
      this.setState({
        cardIMG: "cardStyle03",
      });
    }
  };

  render() {
    const { showResult, AllResult, thinkCircle, cardIMG, cardDisplay } =
      this.state;
    let iconStyles = { color: "grey", fontSize: "2em" };
    return (
      <Layout>
        <Header
          headerCONTENT={
            <div className="SpreadHeader">
              <p className="ChooseAgain" onClick={this.IconClick}>
                <TiArrowLeftThick style={iconStyles} />
                <span style={{ fontSize: "19px", color: "grey" }}>
                  重新抽牌
                </span>
              </p>
              {!thinkCircle && <p style={{ fontSize: '19px', color: 'grey' }}>請截圖回傳給占卜師</p>}
            </div>
          }
        />
        <div className="SpreadFull">
          <div className={thinkCircle ? "react" : "close"}>
            <div className="thinkLogo">
              <img
                className="thinkingBall"
                onClick={this.Spread}
                src="./images/logo_ballUP.webp"
                style={{ position: "absolute" }}
              />
              <img
                className="thinkingBallBased"
                src="./images/logo_ballBased.webp"
                style={{ position: "absolute" }}
              />
            </div>
            <div>
              <div>
                您選擇抽
                <span style={{ fontSize: "20px", color: "burlywood" }}>
                  {this.props.router.query.choose}
                </span>
                張牌
              </div>
              <div>心中思考著您的問題、人、事、物<br/>冥想完畢請點擊<span style={{ fontWeight: '600' }} >水晶球</span></div>
            </div>
          </div>
          <div style={{ height: "100%" }}>
            <Row gutter={8} className="AllResult">
              {AllResult && AllResult.length
                ? AllResult.map((value, item) => (
                    <Col
                      span={6}
                      xs={
                        AllResult.length == 4 ? 9 : AllResult.length <= 3 && 8
                      }
                      xl={AllResult.length >= 5 && 6}
                      flex="0 0 90%"
                      className={cardDisplay}
                      key={item}
                    >
                      <img className={cardIMG} src={value?.url} key={item.url} />
                      <br />
                      <span className="card-name">{value?.name}</span>
                    </Col>
                  ))
                : null}
            </Row>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter(Spread);
