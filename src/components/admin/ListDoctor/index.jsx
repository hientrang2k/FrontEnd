import React, { useState } from "react";
import { Table, Pagination, Tooltip } from "antd";
import { Button } from "@mui/material";
import "./style.css";
import { PlusOutlined, EyeOutlined, EditOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "Full name",
    dataIndex: "fullName",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Phone Number",
    dataIndex: "phoneNumber",
  },
  {
    title: "Specialist",
    dataIndex: "specialist",
  },
  {
    title: "Actions",
    render: (text) => (
      <div>
        <Tooltip title="View" placement="bottom" color="#55ccae">
          <EyeOutlined
            style={{
              marginRight: "20px",
              color: "#b78700",
              cursor: "pointer",
            }}
          />
        </Tooltip>
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
    fullName: "John Brown",
    email: "john@gmail.com",
    phoneNumber: "0988775664",
    specialist: "Neurology",
  },
  {
    key: "2",
    fullName: "Jim Green",
    email: "jim@gmail.com",
    phoneNumber: "0956783221",
    specialist: "Surgeon",
  },
  {
    key: "3",
    fullName: "Joe Black",
    email: "joe@gmail.com",
    phoneNumber: "033466779",
    specialist: "Obstetrician",
  },
  {
    key: "4",
    fullName: "ABC",
    email: "abc@gmail.com",
    phoneNumber: "036777889",
    specialist: "Internist",
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

const ListDoctor = () => {
  const [selectionType, setSelectionType] = useState("checkbox");

  return (
    <div className="p-[30px] h-full">
      <div className="btn-add-account h-[100px] flex justify-between">
        <div>
          Total: <b>4</b> doctors
        </div>
        <Button variant="contained" startIcon={<PlusOutlined />}>
          <span className="normal-case">Add doctor</span>
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

export default ListDoctor;
