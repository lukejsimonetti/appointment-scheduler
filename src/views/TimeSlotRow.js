import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'
import {Button} from 'reactstrap'

const TimeSlotRow = (props) => {
    return (
        <tr>
            <td className="text-center">{moment(props.value, "hh:mm").format("hh:mm").replace(/^0(?:0:0?)?/, '')}</td>
            <td>
                <Button color="success"
                    onClick={() => props.handleModal('TIME_SLOT_MODAL', props.data, props.time_slot_id)}> Schedule Appointment 
                </Button>
                </td>
        </tr>
    )
}

TimeSlotRow.propTypes = {
    
}

export default TimeSlotRow