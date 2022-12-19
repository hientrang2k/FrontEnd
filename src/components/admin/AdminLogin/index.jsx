import React from "react";
import { Row, Space, Button, Form, Input, Typography, message } from "antd";
import { useNavigate } from "react-router-dom";
// import { authConfig as authConfig } from "../../../api/config";

const AdminLogin = ({ setLoading }) => {
  const { Title } = Typography;
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log(values);

    // authConfig(values.username, values.password).then((response) =>
    //   console.log(response)
    // );
  };
  return (
    <Space direction="vertical" size="middle" className="w-full h-full">
      <Row className="w-full flex justify-center">
        <Row className="py-10 px-20 rounded bg-white w-full md:w-[60%] lg:w-[40%] xl:w-[35%] 2xl:w-[30%] flex flex-col shadow-lg">
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
                <Row className="font-semibold text-[1.6rem]">
                  Email
                  <Row className="text-red-500 ml-3">*</Row>
                </Row>
              }
              required={false}
            >
              <Input
                size="large"
                placeholder="admin@gmail.com"
                className="rounded"
              />
            </Form.Item>
            <Form.Item
              name="password"
              label={
                <Row className="font-semibold text-[1.6rem]">
                  Password
                  <Row className="text-red-500 ml-3">*</Row>
                </Row>
              }
              required={false}
            >
              <Input.Password
                size="large"
                placeholder="admin@123"
                className="rounded"
              />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                size="large"
                className="!bg-colorTheme !border-colorTheme hover:bg-colorTheme hover:text-white hover:border-colorTheme w-full mt-5 font-semibold !text-[1.6rem] hover:opacity-90 hover:shadow-lg rounded"
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
