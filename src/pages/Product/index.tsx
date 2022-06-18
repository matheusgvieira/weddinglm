import React, { useEffect, useState } from "react";
import "./styles.css";
import { Button, Card, Divider, Input, message, Form, Image } from "antd";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../../server/api";
import { Item } from "../ChaList";
import { LeftOutlined } from "@ant-design/icons";
import ImageLoading from "../../assets/image_loading.png";

const Product: React.FC = () => {
  const history = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState({} as Item);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    try {
      const { data } = await api.get(`/items/${id}`);

      const response: Item = {
        id: data.Item.id,
        name: data.Item.name,
        description: data.Item.description,
        guest: data.Item.guest,
        url: data.Item.url,
      };

      setItem(response);
      setLoading(false);
    } catch (err: any) {
      console.log("Erro na listagem", err);

      throw new Error(`Erro na listagem ${err}`);
    }
  };

  const onFinish = async (values: any) => {
    try {
      await api.post("/guest", { ...values, id });

      message.success("Obrigado por nos presentear");
      history("/");
    } catch (err: any) {
      console.log("Erro no match com o guest", err);
      message.error("Algo deu errado!");

      throw new Error(`Erro no match com o guest ${err}`);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Falhou:", errorInfo);
  };

  return (
    <div className="list-page-product">
      <div className="list-page-header">
        <div className="people">
          <Link to="/chalist">
            <LeftOutlined />
            Voltar para lista
          </Link>
        </div>
        <div className="date-wedding">15 · 11 · 2022</div>
      </div>
      <Divider />
      <div className="list-title">
        <h2>Confirme seu presente</h2>
      </div>
      <Divider />
      <div className="content">
        <Card title={item.name} style={{ width: 300 }} loading={loading}>
          <Image width={200} src={item.url || ImageLoading} />
          <Divider />
          <p>
            <strong>Descrição: </strong> {item.description}
          </p>

          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Seu nome"
              name="guest"
              rules={[{ required: true, message: "Coloque o seu nome!" }]}
            >
              <Input placeholder="Coloque o seu nome aqui" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Selecionar presente
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Product;
