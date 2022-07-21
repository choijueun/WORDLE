import React from 'react'
import ReactModal from 'react-modal'

function Manual({ isOpen }) {
  return (
    <ReactModal isOpen={isOpen}>
        <div>MODAL</div>
    </ReactModal>
  )
}

export default Manual