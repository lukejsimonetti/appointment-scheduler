import React from 'react';
import PropTypes from 'prop-types'
import {
    Modal,
    ModalBody
} from 'reactstrap'

const ModalWrapper = ({ handleModal, size, isOpen, className, children }) => {

    const close = () => handleModal(undefined)

    return (
        <Modal
            size={size}
            isOpen={isOpen}
            className={className}
            toggle={close}
        >
            <ModalBody>{children}</ModalBody>
        </Modal>
    )
}


ModalWrapper.defaultProps = {
    size: "sm",
    isOpen: false,
}

ModalWrapper.propTypes = {
    handleModal: PropTypes.func.isRequired,
    size: PropTypes.string,
    className: PropTypes.string,
    isOpen: PropTypes.bool,
    children: PropTypes.object,
}

export default ModalWrapper
