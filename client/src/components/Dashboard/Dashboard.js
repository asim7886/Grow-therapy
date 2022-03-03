import {React, useState} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import './Dashboard.css';

// This is layout of the application.

const Dashboard = props => {
    const { Header, Content, Footer, Sider } = Layout;
    const { SubMenu } = Menu;
    const [collapsed, setCollapsed] = useState(false)   

    const onCollapse = collapsed => {
        setCollapsed(collapsed); 
    };  

  return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo">
                    <h1>WIKI ANALYTICS</h1>
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Data
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Sources
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>

            </Content>
            <Footer style={{ textAlign: 'center' }}>Frontend Grow Therapy Assessment</Footer>
            </Layout>
        </Layout>
  )
}

export default Dashboard
