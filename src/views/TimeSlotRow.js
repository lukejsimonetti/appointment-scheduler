import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'

const TimeSlotRow = (props) => {
console.log(props)
    return (
        <tr>
            <td>{moment(props.value, "hh:mm").format("hh:mm").replace(/^0(?:0:0?)?/, '')}</td>

        </tr>
    )
}

TimeSlotRow.propTypes = {
    
}

export default TimeSlotRow