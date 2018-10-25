import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'
import {Button} from 'reactstrap'

const isAvailable = (data) => {
    return Boolean(Object.keys(data).length === 0)
}

const TimeSlotRow = (props) => {
    return (
        <tr>
            <td className="text-center">{moment(props.value, "hh:mm").format("hh:mm A").replace(/^0(?:0:0?)?/, '')}</td>
            <td>
                <Button color={isAvailable(props.data) ? "success" : "danger"}
                    onClick={() => props.handleModal('TIME_SLOT_MODAL', props.data, props.time_slot_id)}> Schedule Appointment 
                </Button>
                </td>
        </tr>
    )
}

TimeSlotRow.propTypes = {
    handleModal: PropTypes.func.isRequired,
    time_slot_id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    data: PropTypes.object
}
export default TimeSlotRow