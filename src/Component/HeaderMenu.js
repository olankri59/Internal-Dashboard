import { Layout, Menu, Row } from 'antd';
import React from 'react'
import './style.css'
import { Button } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';


const { Header } = Layout;

class HeaderMenu extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render(isLogin=false) {
    return (
      <>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Row justify='space-between'>
            <h2 style={{ color: 'White' }}>Internal Dashboard</h2>
            <Menu theme="dark" style={{ height: '64px' }} mode='horizontal'>
              {isLogin ?
                <Button style={{ marginRight: '10px' }} type="primary" shape="round" icon={<LogoutOutlined />} size={'large'} href="/">log out</Button>
                : null}
              {/* <Button type="primary" shape="round" icon={<UserOutlined />} size={'large'}>register</Button> */}
            </Menu>
          </Row>
        </Header>
      </>
    );
  }
}
export default HeaderMenu