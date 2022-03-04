import React from 'react'
import PropTypes from 'prop-types'
import { Bar } from '@ant-design/plots';
import { Row, Col } from 'antd';
import './BarGraph.css';
import Filter from '../Filter/Filter';

const BarGraph = ({wikiData, filter, updateFilter, selectedDate}) => {
    const formattedDate = selectedDate.format('d/M/yyyy');
    let message = null;
    let data = [];
    if(wikiData.items && wikiData.items.length > 0) {
        data = wikiData.items[0].articles.slice(0, filter);
    } else {
        message = wikiData.detail;
    }
    const config = {
        data,
        xField: 'views',
        yField: 'article',
        seriesField: 'article',
        legend: {
            position: 'top-left',
        },
    };
    const filterValues = [
        {
            value: 25,
            label: '25 Articles'
        },
        {
            value: 50,
            label: '50 Articles'
        },
        {
            value: 100,
            label: '100 Articles'
        },
        {
            value: 200,
            label: '200 Articles'
        }
    ];
  return (
    <div className='bar-graph-container'>
        <Row>
            <Col span={12}>
                <h1>Displaying Data for {formattedDate}</h1>
            </Col>
            <Col span={12}>
                <Filter updateFilter={updateFilter}  optionValues={filterValues} defaultIndex={2}/>
            </Col>
        </Row>
        <h3 className='msg'>{message}</h3>
        <Bar {...config} />
    </div>
  )
}

BarGraph.propTypes = {
    wikiData: PropTypes.object,
    filter: PropTypes.number,
    updateFilter: PropTypes.func,
    selectedDate: PropTypes.object
}

export default BarGraph
