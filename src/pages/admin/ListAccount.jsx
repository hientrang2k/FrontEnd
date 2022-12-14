import React, { useState } from "react";
import { Layout, Grid, Drawer, Spin } from "antd";
import AdminListAccount from "../../components/admin/AdminListAccount";
import MenuAdmin from "../../components/admin/MenuAdmin";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const ListAccount = () => {
  const { useBreakpoint } = Grid;
  const { Sider, Content } = Layout;
  const screens = useBreakpoint();

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const onOpen = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <Spin spinning={loading} size="large">
      <Layout className="max-w-screen min-h-screen ">
        {screens.lg && (
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="bg-white flex justify-between items-center p-[12px] bg-[#046970] text-white ">
              <div>TeleAppoint</div>
              {collapsed ? (
                <MenuUnfoldOutlined onClick={() => setCollapsed(!collapsed)} />
              ) : (
                <MenuFoldOutlined onClick={() => setCollapsed(!collapsed)} />
              )}
            </div>
            <MenuAdmin />
          </Sider>
        )}
        {!screens.lg && (
          <Drawer title="Menu" placement="right" width={320} onClose={onClose}>
            <MenuAdmin />
          </Drawer>
        )}

        <Layout className="site-layout">
          <Content style={{}}>
            <AdminListAccount setLoading={setLoading} />
          </Content>
        </Layout>
      </Layout>
    </Spin>
  );
};

export default ListAccount;
