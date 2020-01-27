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
        this.setState({ noteLists: res.data });
        console.log(this.state);
      })
      .catch(err => {
        console.error(err);
      });
  };

  deleteNote = async note_id => {
    console.log(note_id);
    await Axios.delete(`/note`, { data: { id: note_id } })
      .then(res => {
        console.log(res);
        this.componentDidMount();
      })
      .catch(err => {
        console.error(err);
      });
  };

  render = () => {
    console.log(this.state);

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
                  <Row>
                    <Col span={12}>
                      <p className="font-weight-bold">{item.name}</p>
                    </Col>
                    <Col span={12} className="text-right">
                      <i
                        onClick={() => this.deleteNote(item.id)}
                        className="fas fa-backspace"
                      ></i>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <p className="font-italic">{item.type}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <p>{item.description}</p>
                    </Col>
                  </Row>
                </Card>
              </Col>
            );
          })}
        </Row>
      </section>
    );
  };
}
