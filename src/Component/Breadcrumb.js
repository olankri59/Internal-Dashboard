import { Layout, Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react'
import './Breadcrumb.css'


const { Content } = Layout;

class Breadcrumb_ extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Breadcrumb style={{ margin: '16px 0', textAlign: 'left', paddingLeft: '20px' }}>
        <Breadcrumb.Item href><HomeOutlined /></Breadcrumb.Item>
        <Breadcrumb.Item href><UserOutlined />User</Breadcrumb.Item>
        <Breadcrumb.Item href>Bill</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}
export default Breadcrumb_