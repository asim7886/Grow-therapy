import {React, useState} from 'react';
import PropTypes from 'prop-types';
import { Calendar } from 'antd';
import './DatePicker.css';

const DatePicker = ({intialDate, setDate}) => {
    // update state
    const dateSelected =(value) => {
        setDate(value);
    }
    
    return (
        <div>
            <Calendar value={intialDate} fullscreen={false} onSelect={dateSelected} />
        </div>
    )
}

DatePicker.propTypes = {
    intialDate: PropTypes.object,
    setDate: PropTypes.func
}

export default DatePicker
