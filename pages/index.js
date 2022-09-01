import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../component/Layout";
import React from "react";
import { Row, Col, Button } from "antd";
import "antd/dist/antd.css";
import router from "next/router";
import Logo from "../component/Logo";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  SelectNum = (e) => {
    var cardNum = e.currentTarget.value;
    router.push({
      pathname: "/Spread",
      query: {
        choose: cardNum,
      },
    });
  };

  render() {
    return (
      <div>
        <Logo />
        <Layout>
          <div style={{ display: "grid", gridTemplateRows: "90% 10%" }}>
            <div className="indexFull">
              <Row gutter={[8, 16]}>
                <Col className="background" span={6}>
                  <Button  type="primary" value={1} onClick={this.SelectNum} >
                    1
                  </Button>
                </Col>
                <Col className="background" span={6}>
                  <Button value={2} onClick={this.SelectNum} type="primary">
                    2
                  </Button>
                </Col>
                <Col className="background" span={6}>
                  <Button value={3} onClick={this.SelectNum} type="primary">
                    3
                  </Button>
                </Col>
                <Col className="background" span={6}>
                  <Button value={4} onClick={this.SelectNum} type="primary">
                    4
                  </Button>
                </Col>
                <Col className="background" span={6}>
                  <Button value={5} onClick={this.SelectNum} type="primary">
                    5
                  </Button>
                </Col>
                <Col className="background" span={6}>
                  <Button value={6} onClick={this.SelectNum} type="primary">
                    6
                  </Button>
                </Col>
                <Col className="background" span={6}>
                  <Button value={7} onClick={this.SelectNum} type="primary">
                    7
                  </Button>
                </Col>
                <Col className="background" span={6}>
                  <Button value={8} onClick={this.SelectNum} type="primary">
                    8
                  </Button>
                </Col>
                <Col className="background" span={6}>
                  <Button value={9} onClick={this.SelectNum} type="primary">
                    9
                  </Button>
                </Col>
                <Col className="background" span={6}>
                  <Button value={10} onClick={this.SelectNum} type="primary">
                    10
                  </Button>
                </Col>
                <Col className="background" span={6}>
                  <Button value={11} onClick={this.SelectNum} type="primary">
                    11
                  </Button>
                </Col>
                <Col className="background" span={6}>
                  <Button value={12} onClick={this.SelectNum} type="primary">
                    12
                  </Button>
                </Col>
              </Row>
            </div>
            <p> 請選擇要抽幾張牌 </p>
          </div>
        </Layout>
      </div>
    );
  }
}
export default Home;
