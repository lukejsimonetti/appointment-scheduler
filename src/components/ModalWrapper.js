import React from 'react';
import propTypes from 'prop-types'
import {
    Modal,
    ModalBody
} from 'reactstrap'

const ModalWrapper = props => {

    const close = () => props.handleModal(undefined)

    return (
        <Modal
            size={props.size || "sm"}
            isOpen={props.isOpen}
            className={props.className}
            toggle={close}
        >
            <ModalBody>{props.children}</ModalBody>
        </Modal>
    )
}


TimeSlotModal.propTypes = {

};

export default ModalWrapper
