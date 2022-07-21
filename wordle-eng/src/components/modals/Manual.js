import React from 'react'
import { Modal, Button } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux';
import { setManualState } from '../reducers/modalState';

function Manual() {
    const dispatch = useDispatch()
    const isOpen = useSelector(state=>state.modalState.manual)

    function onClick() {
        dispatch(setManualState(!isOpen))
    }

    return <>
        <Modal show={isOpen} onHide={onClick}>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>BODY</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClick}>CLOSE</Button>
                <Button variant="primary" onClick={onClick}>SUBMIT</Button>
            </Modal.Footer>
        </Modal>
    </>
}

export default Manual