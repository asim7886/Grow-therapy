import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';
import { Bar } from '@ant-design/plots';
import './BarGraph.css';
import Filter from '../Filter/Filter';

const BarGraph = ({wikiData, filter, updateFilter}) => {
    let data = [];
    if(wikiData.items && wikiData.items.length > 0) {
        data = wikiData.items[0].articles.slice(0, filter);
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
            label: '25'
        },
        {
            value: 50,
            label: '50'
        },
        {
            value: 100,
            label: '100'
        },
        {
            value: 200,
            label: '200'
        }
    ];
  return (
    <div className='bar-graph-container'>
        <Filter updateFilter={updateFilter}  optionValues={filterValues} defaultIndex={3}/>
        <Bar {...config} />
    </div>
  )
}

BarGraph.propTypes = {
    wikiData: PropTypes.object,
    filter: PropTypes.number,
    updateFilter: PropTypes.func
}

export default BarGraph
