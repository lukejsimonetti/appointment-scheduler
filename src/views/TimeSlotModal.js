import React, { Component } from 'react';
import { Col, Row, Form, Button } from 'reactstrap'
import PropTypes from 'prop-types'
import Input from '../components/Input'
import ModalWrapper from '../components/ModalWrapper'

class TimeSlotModal extends Component {
    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            this.props.setModalFormData('TIME_SLOT_MODAL', this.props.data)
        }
    }

    componentWillUnmount(){
        this.props.setModalFormData('', null)
    }

    render() {
        return (
            <ModalWrapper
                handleModal={this.props.handleModal}
                isOpen={this.props.modal.modalName === 'TIME_SLOT_MODAL'}
            >
                <Form onSubmit={(e) => {e.preventDefault(), this.props.saveFormData()}} >
                    <Row>
                        <Col sm={12}>
                            <Input
                                name="name"
                                label="Full Name"
                                value={this.props.modal.formData.name || ""}
                                onChange={(e) => this.props.updateForm(e.target.value, 'name')}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Input
                                name="phone"
                                label="Phone #"
                                value={this.props.modal.formData.phone || ""}
                                onChange={(e) => this.props.updateForm(e.target.value, 'phone')}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <Button color="secondary" onClick={() => {this.props.handleModal()}}>Cancel</Button>
                        </Col>
                        <Col sm={6}>
                            <Button color="success" type="submit" className="float-right">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </ModalWrapper>
        )
    }
}

TimeSlotModal.propTypes = {
    modal: PropTypes.shape({
        modalName: PropTypes.string,
        formData: PropTypes.object
    }),
    handleModal: PropTypes.func.isRequired,
    updateForm: PropTypes.func.isRequired,
    saveFormData: PropTypes.func.isRequired,
    data: PropTypes.object
}

export default TimeSlotModal