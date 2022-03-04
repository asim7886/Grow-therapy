import React from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd';

const Filter = ({optionValues, defaultIndex, updateFilter}) => {
    const { Option } = Select;
    const handleChange = (value) => {
        updateFilter(value);
    };
    const genOption = (optionValue) => {
        return <Option value={optionValue.value}>{optionValue.label}</Option>; 
    };
    const optionItems = optionValues.map(genOption);

    return (
        <Select defaultValue={optionValues[defaultIndex].value} style={{ width: 120 }} onChange={handleChange}>
            {optionItems}
        </Select>
    )
}

Filter.propTypes = {
    optionValues: PropTypes.array,
    defaultIndex: PropTypes.number,
    updateFilter: PropTypes.func
}

export default Filter
