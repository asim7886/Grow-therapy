import {React, useState} from 'react';
import PropTypes from 'prop-types';
import { Calendar } from 'antd';
import './DatePicker.css';

const DatePicker = ({intialDate, setDate}) => {
    // update state
    const dateSelected =(value) => {
        console.log(value);
        setDate(value);
    }
    
    return (
        <div>
            <h2 className='picker-title'>To Get Started, select a date!</h2>
            <Calendar value={intialDate} fullscreen={false} onSelect={dateSelected} />
        </div>
    )
}

DatePicker.propTypes = {

}

export default DatePicker
