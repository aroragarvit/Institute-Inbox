import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import { AuthContext } from "../context/AuthContext.jsx";
import { useContext } from "react";

import { login } from "../functions/SignIn.jsx";

import { auth } from "../config/firebase.jsx";
const Login = () => {
  const redirect = useNavigate();
  const { user } = useContext(AuthContext);

  console.log(user);
  useEffect(() => {
    console.log(user);
    if (user) {
      console.log("redirecting to home");
      setTimeout(() => {
        redirect("/available");
      }, 500);
    }
  }, [redirect, user]);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    login(values.email, values.password);
  };
  if (user) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Spin />
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        zIndex: "0",
      }}
    >
      <div // Add a wrapper div around the form
        style={{
          maxWidth: "400px",
          width: "100%",
          padding: "20px",
          border: "1px solid #e8e8e8",
          borderRadius: "5px",
          backgroundColor: "rgba(255, 255, 255, 0.3)",

          position: "relative",
          zIndex: "5",
        }}
      >
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            <> Or</> <Link to="/register">register now!</Link>
          </Form.Item>
        </Form>
      </div>
      <img
        src="https://lh3.googleusercontent.com/p/AF1QipNW1Cpyw0Hn5AKS5xAxrRhcqN8J0CVPhV2bKng5=s1360-w1360-h1020"
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "blur(8px)", // Add blur filter to the background image
          zIndex: "-1",
        }}
      />
    </div>
  );
};

export default Login;
