import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const AppContact = () => {
  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Get in Touch</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="fullname"
            rules={[
              { required: true, message: "Please input your Full Name!" },
            ]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input type="email" placeholder="Email" />
          </Form.Item>
          <Form.Item name="phone">
            <Input placeholder="Phone" />
          </Form.Item>
          <Form.Item name="subject">
            <Input placeholder="Subject" />
          </Form.Item>
          <Form.Item name="message">
            <TextArea placeholder="Message" />
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default AppContact;
