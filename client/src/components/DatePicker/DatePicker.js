import {React} from 'react';
import PropTypes from 'prop-types';
import { Calendar } from 'antd';
import './DatePicker.css';
import '../Filter/Filter';

const DatePicker = ({intialDate, setDate}) => {
    // update state
    const dateSelected =(value) => {
        setDate(value);
    }
    
    return (
        <div>
            <Calendar value={intialDate} fullscreen={true} onSelect={dateSelected} />
        </div>
    )
}

DatePicker.propTypes = {
    intialDate: PropTypes.object,
    setDate: PropTypes.func
}

export default DatePicker
