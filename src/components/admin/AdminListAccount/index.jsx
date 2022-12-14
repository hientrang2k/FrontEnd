import React, { useState } from "react";
import { Table, Pagination, Tooltip } from "antd";
import { Button, Box } from "@mui/material";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import "./style.css";

const columns = [
  {
    title: "User name",
    dataIndex: "userName",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Full name",
    dataIndex: "fullName",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Role",
    dataIndex: "role",
  },
  {
    title: "Actions",
    render: (text) => (
      <div>
        <Tooltip title="Edit" placement="bottom" color="#55ccae">
          <EditOutlined style={{ color: "#005e40", cursor: "pointer" }} />
        </Tooltip>
      </div>
    ),
  },
];
const data = [
  {
    key: "1",
    userName: "johnBrown",
    fullName: "John Brown",
    email: "john@gmail.com",
    role: "Doctor",
  },
  {
    key: "2",
    userName: "jimGreen",
    fullName: "Jim Green",
    email: "jim@gmail.com",
    role: "Admin",
  },
  {
    key: "3",
    userName: "joeBlack",
    fullName: "Joe Black",
    email: "joe@gmail.com",
    role: "User",
  },
  {
    key: "4",
    userName: "testABC",
    fullName: "ABC",
    email: "abc@gmail.com",
    role: "User",
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    // disabled: record.name === "Disabled User",
    // name: record.name,
  }),
};

const AdminListAccount = () => {
  const [selectionType, setSelectionType] = useState("checkbox");

  return (
    <div className="p-[30px] h-full">
      <div className="btn-add-account h-[100px] flex justify-between">
        <div>
          Total: <b>4</b> accounts
        </div>
        <Button variant="contained" startIcon={<PlusOutlined />}>
          <span className="normal-case">Add user</span>
        </Button>
      </div>
      <div className="p-[20px] bg-white h-full rounded-[15px] table-shadow">
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
        <Pagination
          total={15}
          defaultPageSize={5}
          defaultCurrent={1}
          pageSizeOptions={["5", "10", "20", "30", "50"]}
          showSizeChanger={true}
          onChange={() => {}}
          onShowSizeChange={() => {}}
        />
      </div>
    </div>
  );
};

export default AdminListAccount;
