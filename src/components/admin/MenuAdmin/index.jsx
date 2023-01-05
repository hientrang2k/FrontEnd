import React, { useEffect, useState } from "react";
import { Menu, Row, Divider } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import "./style.css";

const MenuAdmin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openKeys, setOpenKeys] = useState([]);
  const logout = () => {
    localStorage.removeItem("token_admin");
    localStorage.removeItem("id_token_admin");
    navigate("/admin/login");
  };
  useEffect(() => {
    switch (location.pathname) {
      case "/admin/categoryManagement":
        setOpenKeys(["sub1"]);
        break;
      case "/admin/addCategory":
        setOpenKeys(["sub1"]);
        break;
      case "/admin/productManagement" || "/admin/addProduct":
        setOpenKeys(["sub2"]);
        break;
      case "/admin/addProduct":
        setOpenKeys(["sub2"]);
        break;
      case "/admin/postManagement":
        setOpenKeys(["sub3"]);
        break;
      case "/admin/postCategory":
        setOpenKeys(["sub3"]);
        break;
      case "/admin/addPost":
        setOpenKeys(["sub3"]);
        break;
      case "/admin/adminList":
        setOpenKeys(["sub4"]);
        break;
      case "/admin/addAdmin":
        setOpenKeys(["sub4"]);
        break;
      default:
        setOpenKeys([]);
    }
  }, [location.pathname]);
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="inline"
      openKeys={openKeys}
      onOpenChange={(keys) => {
        setOpenKeys(keys);
      }}
      className="h-full w-full py-[10px] text-[1.6rem] font-semibold text-[#828282]"
    >
      <Menu.Item
        key="/admin/list-account"
        onClick={() => navigate("/admin/list-account")}
      >
        <Row className="flex items-center">List Account</Row>
      </Menu.Item>
      <Menu.Item
        key="/admin/list-doctor"
        onClick={() => navigate("/admin/list-doctor")}
      >
        <Row className="flex items-center">List Doctor</Row>
      </Menu.Item>

      <Menu.Item>
        <Row className="flex items-center">List Patients</Row>
      </Menu.Item>
      <Menu.Item>
        <Row className="flex items-center">Schedules</Row>
      </Menu.Item>
    </Menu>
  );
};

export default MenuAdmin;
