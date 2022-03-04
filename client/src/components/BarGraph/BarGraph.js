import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';
import { Bar } from '@ant-design/plots';

const BarGraph = ({wikiData}) => {
    let data = [];
    //console.log(wikiData.items[0].articles);
    if(wikiData.items && wikiData.items.length > 0) {
        data = wikiData.items[0].articles;
        console.log(data);
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
  return (
    <div>
      <Bar {...config} />
    </div>
  )
}

BarGraph.propTypes = {
    wikiData: PropTypes.object
}

export default BarGraph
