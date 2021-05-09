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
import { Link } from 'react-router-dom'



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
            <Layout style={{ minHeight: '100vh', width: '200px', position: 'fixed' }} >
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
                        <SubMenu style={{ paddingTop: '64px' }} key="sub1" icon={<RocketFilled style={{ fontSize: '20px', color: '#088c' }} />} title="BUCR">
                            <Menu.Item key="BUCR_1" icon={<PieChartOutlined />}>
                                <Link to={'/BUCR/Dashboard'} >Dashboard</Link>
                            </Menu.Item>
                            <Menu.Item key="BUCR_2" icon={<DesktopOutlined />}>
                                <Link to={'/BUCR/Tasks'} >Tasks</Link>
                            </Menu.Item>
                            <Menu.Item key="BUCR_3" icon={<AuditOutlined />}>
                                Quotation
                                </Menu.Item>
                            <Menu.Item key="BUCR_4" icon={<UnorderedListOutlined />}>
                                Purchase Order
                                </Menu.Item>
                            <Menu.Item key="BUCR_5" icon={<MehOutlined />}>
                                Client
                                </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<TeamOutlined style={{ fontSize: '20px', color: '#FF6076' }} />} title="OP">
                            <Menu.Item key="OP_1" icon={<PieChartOutlined />}>
                                <Link to={'/OP/Dashboard'} >Dashboard</Link>
                            </Menu.Item>
                            <Menu.Item key="OP_2" icon={<DesktopOutlined />}>
                                <Link to={'/OP/Tasks'} >Tasks</Link>

                            </Menu.Item>
                            <Menu.Item key="OP_3" icon={<AuditOutlined />}>
                                Quotation
                            </Menu.Item>
                            <Menu.Item key="OP_4" icon={<AuditOutlined />}>
                                Client
                            </Menu.Item>
                            <Menu.Item key="OP_5" icon={<AuditOutlined />}>
                                Agent
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<FileOutlined />}>
                            Files
                        </Menu.Item>
                    </Menu>
                </Sider>
            </Layout>
        );
    }
}
export default Menubar