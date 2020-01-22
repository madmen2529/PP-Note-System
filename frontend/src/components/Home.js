import React, { Component } from "react";
import { Row, Col, Card } from "antd";

import Axios from "../config/axios.setup";

import "antd/dist/antd.css";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteLists: []
    };
  }

  // noteLists: [
  //   {
  //     name: "Todo list 1",
  //     type: "Work",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  //   },
  //   {
  //     name: "Todo list 2",
  //     type: "Work",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  //   },
  //   {
  //     name: "Todo list 3",
  //     type: "Work",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  //   }
  // ]

  componentDidMount = async () => {
    await Axios.get(`/note`)
      .then(res => {
        console.log(res.data);
        const x = res.data;
        this.setState({ noteLists: x });
      })
      .catch(err => {
        console.error(err);
      });
  };

  render = () => {
    // console.log(this.state);

    return (
      <section id="home-section">
        <Row className="pt-4" span={24}>
          {this.state.noteLists.map((item, idk) => {
            return (
              <Col span={24 / 3}>
                <Card
                  key={idk}
                  size="small"
                  style={{
                    backgroundColor: "#3333ff",
                    color: "white"
                  }}
                >
                  <p className="font-weight-bold">{item.name}</p>
                  <p className="font-italic">{item.type}</p>
                  <p>{item.description}</p>
                </Card>
              </Col>
            );
          })}
        </Row>
      </section>
    );
  };
}
