import React, { Component } from "react";

import { Form, Icon, Input, Button, Checkbox, Row, Col } from "antd";

import Axios from "../config/axios.setup";

import "antd/dist/antd.css";

class Addnote extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }

      Axios.post(`/note`, values).then(res => {
        console.log(res);
        console.log(res.data);
      });

      this.props.form.resetFields()
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <section id="login-section">
        <h3 className="pt-4 text-center"> Add note </h3>

        <Form onSubmit={this.handleSubmit} className="login-form pt-2">
          <Form.Item>
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "Please input title name!" }]
            })(<Input placeholder="Note name" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("type", {
              rules: [{ required: true, message: "Please input note title!" }]
            })(<Input placeholder="Note type" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("description", {
              rules: [
                { required: true, message: "Please input note description!" }
              ]
            })(<Input placeholder="Note description" />)}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
            >
              Add
            </Button>
          </Form.Item>
        </Form>
      </section>
    );
  }
}

const retFrom = Form.create({ name: "normal_login" })(Addnote);

export default retFrom;
