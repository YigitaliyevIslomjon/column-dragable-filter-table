import { ColumnType } from "antd/es/table";
import { MainRows } from "Entities/main";

interface CustomColumnType<T> extends ColumnType<T> {
  order_number: number;
}

export default function useMainTable() {
  const columns: CustomColumnType<MainRows>[] = [
    {
      title: <div className="dragHandler">Key</div>,
      dataIndex: "key",
      width: 150,
      fixed: "left",
      key: "key",
      order_number: 1,
    },
    {
      title: <div className="dragHandler">Name</div>,
      dataIndex: "name",
      width: 300,
      key: "name",
      order_number: 2,
    },
    {
      title: <div className="dragHandler">Gender</div>,
      dataIndex: "gender",
      width: 300,
      key: "gender",
      order_number: 3,
    },
    {
      title: <div className="dragHandler">Age</div>,
      dataIndex: "age",
      width: 300,
      key: "age",
      order_number: 4,
    },
    {
      title: <div className="dragHandler">Address</div>,
      dataIndex: "address",
      key: "address",
      order_number: 5,
      width: 300,
    },
    {
      title: <div className="dragHandler">home</div>,
      dataIndex: "home",
      key: "home",
      order_number: 6,
      width: 300,
    },
    {
      title: <div className="dragHandler">car</div>,
      dataIndex: "car",
      key: "car",
      order_number: 7,
      width: 300,
    },
    {
      title: <div className="dragHandler">borthers</div>,
      dataIndex: "borthers",
      key: "borthers",
      order_number: 8,
      width: 300,
    },
    {
      title: <div className="dragHandler">moneys</div>,
      dataIndex: "moneys",
      key: "moneys",
      order_number: 9,
      width: 300,
    },
    {
      title: <div className="dragHandler">sisters</div>,
      dataIndex: "sisters",
      key: "sisters",
      order_number: 10,
      width: 300,
    },
    {
      title: <div className="dragHandler">dogs</div>,
      dataIndex: "dogs",
      key: "dogs",
      order_number: 11,
      width: 300,
    },
    {
      title: <div className="dragHandler">cats</div>,
      dataIndex: "cats",
      key: "cats",
      order_number: 12,
      width: 300,
    },
  ];

  const rows: MainRows[] = [
    {
      key: "1",
      name: "Boran",
      gender: "male",
      age: "12",
      address: "New York",
      home: "home",
      car: "car",
      borthers: "borthers",
      moneys: "money",
      sisters: "sisters",
      dogs: "dogs",
      cats: "cats",
    },
    {
      key: "2",
      name: "Boran",
      gender: "male",
      age: "12",
      address: "New York",
      home: "home",
      car: "car",
      borthers: "borthers",
      moneys: "money",
      sisters: "sisters",
      dogs: "dogs",
      cats: "cats",
    },
    {
      key: "3",
      name: "Boran",
      gender: "male",
      age: "12",
      address: "New York",
      home: "home",
      car: "car",
      borthers: "borthers",
      moneys: "money",
      sisters: "sisters",
      dogs: "dogs",
      cats: "cats",
    },
    {
      key: "4",
      name: "Boran",
      gender: "male",
      age: "12",
      address: "New York",
      home: "home",
      car: "car",
      borthers: "borthers",
      moneys: "money",
      sisters: "sisters",
      dogs: "dogs",
      cats: "cats",
    },
  ];

  return { columns, rows };
}
