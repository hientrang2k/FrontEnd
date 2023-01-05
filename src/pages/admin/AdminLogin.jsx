import React, { useState } from "react";
import { Layout, Spin } from "antd";
import LoginForm from "../../components/admin/AdminLogin";

const AdminLogin = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Spin spinning={loading} size="large">
      <Layout className="layout max-w-screen min-h-screen">
        <LoginForm setLoading={setLoading} />
      </Layout>
    </Spin>
  );
};

export default AdminLogin;
