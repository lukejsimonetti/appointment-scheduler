import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Col, Row, Form } from 'reactstrap'

import InputText from '../components/InputText'
import ModalWrapper from '../components/ModalWrapper'

class TimeSlotModal extends Component {
    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            console.log('called')
            this.props.setModalFormData('TIME_SLOT_MODAL', this.props.data)
        }
    }

    render() {
        return (
            <ModalWrapper
                handleModal={this.props.handleModal}
                isOpen={this.props.modal.modalName === 'TIME_SLOT_MODAL'}
                actionButtonAction={() => this.props.addEvent()}
                actionButtonLabel="Save"
            >
                <Form onSubmit={() => console.log('got here')} >
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
                </Form>
            </ModalWrapper>
        )
    }
}

TimeSlotModal.propTypes = {

};

TimeSlotModal = reduxForm({
    form: 'timeSlotModal',
    destroyOnUnmount: true,
})(TimeSlotModal)

TimeSlotModal = connect(
    state => (console.log(state.app.modal.formData, 'after'),{
      initialValues: {
          name: state.app.modal.formData.name
      }
    })
  )(TimeSlotModal)

export default TimeSlotModal