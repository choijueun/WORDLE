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
            <Modal.Body>
                <div style={{'textAlign': 'center'}}>
                    <h5>How To Play</h5>
                    <p>어쩌구저쩌구~</p>
                </div>
            </Modal.Body>
        </Modal>
    </>
}

export default Manual