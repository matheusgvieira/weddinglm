import React from "react";
import "./styles.css";
import { Table } from "antd";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const ChaList: React.FC = () => {
  return (
    <div className="list-page">
      <div className="list-page-header">
        <div className="people">Larissa & Matheus</div>
        <div className="date-wedding">15 · 11 · 2022</div>
      </div>
      <div className="content">
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default ChaList;
