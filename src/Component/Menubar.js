import { Layout, Menu } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    RocketFilled,
    UnorderedListOutlined,
    AuditOutlined,
    MehOutlined
} from '@ant-design/icons';
import React from 'react'


const { Sider } = Layout;
const { SubMenu } = Menu;

class Menubar extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Layout style={{ minHeight: '100vh', width: '200px' }} >
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
                        <SubMenu style={{ paddingTop: '64px' }} key="sub1" icon={<RocketFilled style={{ fontSize: '20px', color: '#088c' }} />} title="BUCR">
                            <Menu.Item key="Bucr-1" icon={<PieChartOutlined />}>
                                Dashboard
                            </Menu.Item>
                            <Menu.Item key="Bucr-2" icon={<DesktopOutlined />}>
                                Tasks
                            </Menu.Item>
                            <Menu.Item key="Bucr-3" icon={<AuditOutlined />}>
                                Quotation
                                </Menu.Item>
                            <Menu.Item key="Bucr-4" icon={<UnorderedListOutlined />}>
                                Purchase Order
                                </Menu.Item>
                            <Menu.Item key="Bucr-5" icon={<MehOutlined />}>
                                Client
                                </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<TeamOutlined style={{ fontSize: '20px', color: '#FF6076' }} />} title="OP">
                            <Menu.Item key="Op-1" icon={<PieChartOutlined />}>
                                Dashboard
                            </Menu.Item>
                            <Menu.Item key="Op-2" icon={<DesktopOutlined />}>
                                Tasks
                            </Menu.Item>
                            <Menu.Item key="Op-3" icon={<AuditOutlined />}>
                                Quotation
                            </Menu.Item>
                            <Menu.Item key="Op-4" icon={<MehOutlined />}>
                                Client
                                </Menu.Item>
                            <Menu.Item key="Op-5" icon={<MehOutlined />}>
                                Agent
                                </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
            </Layout>
        );
    }
}
export default Menubar