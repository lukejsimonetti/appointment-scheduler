import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Form } from 'reactstrap'

import Input from '../components/Input'
import ModalWrapper from '../components/ModalWrapper'

class TimeSlotModal extends Component {
    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
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
                            <Input
                                name="name"
                                label="Full Name"
                                value={this.props.modal.formData.name || ''}
                                onChange={(e) => this.props.updateForm(e.target.value, 'name')}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Input
                                name="phone"
                                label="Phone #"
                                value={this.props.modal.formData.phone || ''}
                                onChange={(e) => this.props.updateForm(e.target.value, 'phone')}
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

export default TimeSlotModal