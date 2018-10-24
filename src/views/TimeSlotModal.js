import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form'
import { Col, Row } from 'reactstrap'

import InputText from '../components/InputText'
import ModalWrapper from '../components/ModalWrapper'

let TimeSlotModal = props => {
    return (
        <ModalWrapper
            handleModal={props.handleModal}
            isOpen={props.modal.name === 'TIME_SLOT_MODAL'}
            actionButtonAction={() => props.addEvent()}
            actionButtonLabel="Save"
        >
            <Row>
                <Col sm={12}>
                    <Field
                        name="name"
                        label="Name"
                        labelHidden={false}
                        type="text"
                        component={InputText}
                    // validate={[v.required]}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Field
                        name="phone"
                        label="Phone #"
                        labelHidden={false}
                        type="text"
                        component={InputText}
                    // validate={[v.number]}
                    />
                </Col>
            </Row>

        </ModalWrapper>
    )
}

TimeSlotModal.propTypes = {

};

export default reduxForm({
    form: 'timeSlotModal',
    destroyOnUnmount: true,
})(TimeSlotModal)