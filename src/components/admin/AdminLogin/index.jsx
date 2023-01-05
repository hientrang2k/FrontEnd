import React from "react";
import { Row, Space, Button, Form, Input, Typography, message } from "antd";
import { useNavigate } from "react-router-dom";
import "./style.css";
// import { authConfig as authConfig } from "../../../api/config";

const AdminLogin = ({ setLoading }) => {
  const { Title } = Typography;
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Space direction="vertical" size="middle" className="w-full h-full m-auto">
      <Row className="w-full flex justify-center">
        <Row className="py-10 px-20 rounded bg-white w-full md:w-[60%] lg:w-[40%] xl:w-[35%] 2xl:w-[30%] flex flex-col shadow-lg rounded-[30px]">
          <Title level={3} className="block self-center !mb-10 !text-[#343a40]">
            Login
          </Title>
          <Form
            layout="vertical"
            autoComplete="off"
            onFinish={onFinish}
            className="w-full"
          >
            <Form.Item
              name="username"
              label={
                <Row className="font-medium text-[16px] text-[rgba(0,0,0,0.6)]">
                  User name
                  <Row className="text-red-500 ml-3">*</Row>
                </Row>
              }
              required={false}
            >
              <Input
                size="large"
                placeholder="username"
                className="rounded-[10px] bg-[#E3FFFA] border-[#9EC8C0]"
              />
            </Form.Item>
            <Form.Item
              name="password"
              label={
                <Row className="font-medium text-[16px] text-[rgba(0,0,0,0.6)]">
                  Password
                  <Row className="text-red-500 ml-3">*</Row>
                </Row>
              }
              required={false}
            >
              <Input.Password
                size="large"
                placeholder="admin@123"
                className="rounded-[10px] bg-[#E3FFFA] border-[#9EC8C0]"
              />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                size="large"
                className="flex justify-center items-center bg-btn-login  w-full mt-5 font-semibold !text-[18px] rounded"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </Row>
    </Space>
  );
};

export default AdminLogin;
