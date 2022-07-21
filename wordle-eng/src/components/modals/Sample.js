import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

function Sample() {
    const [isOpen, setIsOpen] = useState(false)

    return <>
        <Button variant="primary" onClick={()=>{setIsOpen(!isOpen)}}>OPEN</Button>

        <Modal show={isOpen} onHide={()=>{setIsOpen(!isOpen)}}>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>BODY</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={()=>{setIsOpen(!isOpen)}}>CLOSE</Button>
                <Button variant="primary" onClick={()=>{setIsOpen(!isOpen)}}>SUBMIT</Button>
            </Modal.Footer>
        </Modal>
    </>
}

export default Sample