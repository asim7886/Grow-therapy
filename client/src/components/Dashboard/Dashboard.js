import {React, useState, useEffect} from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import './Dashboard.css';
import DatePicker from '../DatePicker/DatePicker';
import Moment from 'react-moment';
import moment from 'moment';
import axios from "axios";

// This is layout of the application.

const Dashboard = props => {
    const { Header, Content, Footer, Sider } = Layout;
    const yesterday = moment().subtract(1, 'day'); 
    // STATE 
    const [selectedDay, setSelectedDay] = useState(yesterday); // set the intial state to yesterday's date;
    const [collapsed, setCollapsed] = useState(false); // manages the side menu position
    const [wikiData, setWikiData] = useState({});
    
    const onCollapse = collapsed => {
        setCollapsed(collapsed); 
    };

    const getWikiData = (date) => {
        const baseURL = "https://wikimedia.org/api/rest_v1/metrics/pageviews/top/pt.wikipedia/all-access/";
        const year = date.format('yyyy');
        const month = date.format('MM');
        let day = date.subtract(1, 'day').format('d');
        day = day.length == 1 ? '0' + day : day;
        const requstURL = baseURL + year + '/' + day+ '/' + month;
        axios.get(requstURL).then((response) => {
            setWikiData(response.data);
        });
    }

    // HOOKS
    useEffect(() => {
        getWikiData(selectedDay);
    },[selectedDay])

    useEffect(() => {
        console.log(wikiData);
    },[wikiData])

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
                <Row>
                    <Col span={8}>
                        <DatePicker intialDate={selectedDay} setDate={setSelectedDay} />
                    </Col>
                    <Col span={16}>
                        Analytics to go here!
                    </Col>
                </Row>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Frontend Grow Therapy Assessment</Footer>
            </Layout>
        </Layout>
  )
}

export default Dashboard
