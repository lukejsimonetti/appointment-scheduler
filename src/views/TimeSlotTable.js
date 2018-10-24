import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/app.js'

import { Table, Col } from 'reactstrap'

import TimeSlotRow from './TimeSlotRow'
import TimeSlotModal from './TimeSlotModal'

class TimeSlotTable extends Component {
    componentDidMount() {
        this.props.getAvailableTimeSlots()
    }

    render() {
        return (
            <Fragment>
                <Col sm={{ size: 8, offset: 2 }} >
                    <Table striped bordered hover condensed="true">
                        <thead>
                            <tr>
                                <th>Available Time Slots</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.availableTimeSlots && this.props.availableTimeSlots.map((v, i) => {
                                return <TimeSlotRow {...v} key={v.time_slot_id} {...this.props} />
                            })}
                        </tbody>
                    </Table >
                </Col>
                <TimeSlotModal {...this.props} />
            </Fragment>
        )
    }
}

TimeSlotTable.propTypes = {

}

export default connect(
    state => ({ ...state.app }),
    dispatch => bindActionCreators(actionCreators, dispatch)
)(TimeSlotTable)