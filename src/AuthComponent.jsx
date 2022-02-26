import React, { useState } from "react";
import { Form, Input, Button, Col, Row } from "antd";
import axios from "axios";
import openNotification from "./utils/openAntdNotification";

function AuthComponent({ setData }) {
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = async (v) => {
    console.log(v);
    try {
      setIsLoading(true);
      const res = await axios.post("http://localhost:5200", v);
      setIsLoading(false);
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      setIsLoading(false);
      setData([]);
      console.log(error);
      const errorMsg = error.response ? error.response.data : error.message;
      openNotification("error", "Error in logging in", errorMsg);
    }
  };
  return (
    <Col span={6}>
      <Form name="authComponent" onFinish={onFinish} autoComplete="off">
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Row justify="space-around">
          <Form.Item wrapperCol={{ span: 8 }}>
            <Button type="primary" htmlType="reset" onClick={() => setData([])}>
              Reset
            </Button>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 12 }}>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Submit
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </Col>
  );
}

export default AuthComponent;
