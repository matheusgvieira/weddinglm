import React, { useEffect, useState } from "react";
import "./styles.css";
import { Table, Button, Input, Divider } from "antd";
import api from "../../server/api";
import { AudioOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";

const Search = Input.Search;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#9c98a6",
    }}
  />
);

const ChaList: React.FC = () => {
  const columns = [
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Descrição",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Seleção",
      render: (item: any) => (
        <Button onClick={() => handleSelectProduct(item.id)}>Selecionar</Button>
      ),
    },
  ];

  const [dataList, setList] = useState([] as Item[]);
  const [loading, setLoading] = useState(true);

  const history = useNavigate();

  useEffect(() => {
    getListItems();
  }, []);

  const handleSelectProduct = (id: string) => {
    history(`/product/${id}`);
    return;
  };

  const onSearch = (value: string) => {
    if (!value) {
      getListItems();
    }
    const dataListFiltered = dataList.filter((data) =>
      data.name.includes(value)
    );

    setList(dataListFiltered);
  };

  const getListItems = async () => {
    try {
      const { data } = await api.get("/items");

      const response: Item[] = data.Items.map((item: Item) => {
        return {
          id: item.id,
          name: item.name,
          description: item.description,
          guest: item.guest,
          url: item.url,
        };
      });

      const list_presents = response.filter((present) => !present.guest);

      setList(list_presents);
      setLoading(false);
    } catch (err: any) {
      console.log("Erro na listagem", err);

      throw new Error(`Erro na listagem ${err}`);
    }
  };

  return (
    <div className="list-page">
      <div className="list-page-header">
        <div className="people">
          <Link to="/">Larissa & Matheus</Link>
        </div>
        <div className="date-wedding">15 · 11 · 2022</div>
      </div>
      <Divider />
      <div className="list-title">
        <h2>Lista de Presentes do Chá</h2>
      </div>
      <Divider />
      <div className="content">
        <Search
          placeholder="Item da lista"
          onSearch={onSearch}
          suffix={suffix}
          style={{ width: 200, margin: 8 }}
        />
        <Table dataSource={dataList} columns={columns} loading={loading} />
      </div>
    </div>
  );
};

export default ChaList;

export type Item = {
  id: string;
  name: string;
  description: string;
  url: string;
  guest: string;
};
