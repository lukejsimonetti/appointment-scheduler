import React, { Component } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button
} from 'reactstrap'

const ModalWrapper = props => {

    const close = () => props.handleModal(undefined)

    const renderActionButton = () => {
        if (props.actionButtonAction !== undefined) {
            return (
                <Button color="success" onClick={props.actionButtonAction}>
                    {props.actionButtonLabel}
                </Button>
            )
        }
    }

    return (
        <Modal
            size={props.size || "sm"}
            isOpen={props.isOpen}
            className={props.className}
            toggle={close}
        >
            <ModalBody>{props.children}</ModalBody>
            <ModalFooter>
                {renderActionButton()}
                <Button color="secondary" onClick={close}>{props.hasCloseBtn ? `Close` : `Cancel`}</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalWrapper
