import React, { useState } from "react";
import { Layout, Spin } from "antd";
import HomePage from "../../components/user/HomePage";

const HomeUser = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Spin spinning={loading} size="large">
      <Layout className="layout bg-[rgb(247, 247, 247)] max-w-screen min-h-screen">
        <HomePage setLoading={setLoading} />
      </Layout>
    </Spin>
  );
};

export default HomeUser;
