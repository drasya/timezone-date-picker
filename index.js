import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment-timezone';
import 'react-datepicker/dist/react-datepicker.css';
const TimezoneDatePicker = ({ onChange = () => { }, selected, minDate, maxDate, minDateTz = false, ...restProps }) => {
  const [selectedDate, setSelectedDate] = useState(selected)
  const [isDefault, setIsDefault] = useState(true)
  const convertMomentDate = (date) => {
    const _date = moment(date).format('YYYY-MM-DD HH:mm:ss')
    return new Date(_date)
  }
  const handleChange = (date) => {
    setSelectedDate(date)
    setIsDefault(false)
    onChange(date)
  };
  return (
    <DatePicker
      maxDate={convertMomentDate(maxDate)}
      selected={isDefault ? convertMomentDate(selectedDate) : selectedDate}
      onChange={handleChange}
      {
        ...(minDate ? { minDate: minDateTz ? convertMomentDate(minDate) : minDate } : {})
      }
      {...restProps}
    />
  )
}
module.exports = TimezoneDatePicker
