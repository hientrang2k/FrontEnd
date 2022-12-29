import React, { useState } from "react";
import { Layout, Spin } from "antd";
import AdminListAccount from "../../components/admin/AdminListAccount";

const ListAccount = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Spin spinning={loading} size="large">
      <Layout className="layout bg-[rgb(247, 247, 247)] max-w-screen min-h-screen">
        <AdminListAccount setLoading={setLoading} />
      </Layout>
    </Spin>
  );
};

export default ListAccount;
