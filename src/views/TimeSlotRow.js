import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'
import {Button} from 'reactstrap'

const TimeSlotRow = (props) => {
    return (
        <tr>
            <td>{moment(props.value, "hh:mm").format("hh:mm").replace(/^0(?:0:0?)?/, '')}</td>
            <td><Button onClick={() => props.handleModal('TIME_SLOT_MDOAL')}> Add </Button></td>
        </tr>
    )
}

TimeSlotRow.propTypes = {
    
}

export default TimeSlotRow