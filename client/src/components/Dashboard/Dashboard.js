import {React, useState, useEffect} from 'react';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  BarChartOutlined
} from '@ant-design/icons';
import './Dashboard.css';
import DatePicker from '../DatePicker/DatePicker';
import BarGraph  from '../BarGraph/BarGraph';
import Moment from 'react-moment';
import moment from 'moment';
import axios from "axios";
import './Dashboard.css';

// This is layout of the application.

const Dashboard = props => {
    const { Header, Content, Footer, Sider } = Layout;
    const yesterday = moment().subtract(1, 'day'); 
    // STATE 
    const [selectedDay, setSelectedDay] = useState(yesterday); // set the intial state to yesterday's date;
    const [collapsed, setCollapsed] = useState(false); // manages the side menu position
    const [wikiData, setWikiData] = useState({});
    const [view, setView] = useState('dataView');
    const [filter, setFilter] = useState(100);
    
    const onCollapse = collapsed => {
        setCollapsed(collapsed); 
    };

    const udpateView = view => {
        setView(view);
        highlightMenuTab(view);
    }

    const getWikiData = (date) => {
        const baseURL = "https://wikimedia.org/api/rest_v1/metrics/pageviews/top/pt.wikipedia/all-access/";
        const year = date.format('yyyy');
        const month = date.format('MM');
        let day = date.format('d');
        day = day.length == 1 ? '0' + day : day;
        const requstURL = baseURL + year + '/' + day+ '/' + month;
        axios.get(requstURL).then((response) => {
            setWikiData(response.data);
        }).catch(function (error) {
            if (error.response) {
              setWikiData(error.response.data);
            }
        
          });
    }

    // HOOKS
    useEffect(() => {
        getWikiData(selectedDay);
        udpateView('dataView');

    },[selectedDay]);
    

    // DYNAMIC VIEWS
    const contentView = view == 'datePicker' ? (
        <DatePicker intialDate={selectedDay} setDate={setSelectedDay} />
    ) : (
        <BarGraph updateFilter={setFilter} filter={filter} wikiData={wikiData} selectedDate={selectedDay} />
    );

    //DOM MINIPULATION

    // this is not ideal but there is a bit of funkyness with ant design's menu items updating with state so for a quick fix this will do
    // This should be refactored out in the future (if this was a real feature)
    const highlightMenuTab = (view) => {
        let elems = document.querySelectorAll(".ant-menu-item-selected");
        [].forEach.call(elems, function(el) {
            el.classList.remove("ant-menu-item-selected");
        });
    
        let updateElems = document.querySelectorAll("." + view);
        [].forEach.call(updateElems, function(el) {
            el.classList.add("ant-menu-item-selected");
        });
    }

  return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo">
                    <h1>WIKI ANALYTICS</h1>
                </div>
                <Menu theme="dark" defaultSelectedKeys={[view]} SelectedKeys={[view]} mode="inline">
                    <Menu.Item className='datePicker' onClick={() => udpateView('datePicker')} key="datePicker" icon={<DesktopOutlined />}>
                        Pick Date
                    </Menu.Item>
                    <Menu.Item className='dataView' onClick={() => udpateView('dataView')} key="dataView" icon={<BarChartOutlined />}>
                        Data Visualization 
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content className='content-container'>
                {contentView}
            </Content>
            <Footer style={{ textAlign: 'center' }}>Frontend Grow Therapy Assessment</Footer>
            </Layout>
        </Layout>
  )
}

export default Dashboard
