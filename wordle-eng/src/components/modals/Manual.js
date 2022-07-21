import React from 'react'
import ReactModal from 'react-modal'

import ModalBtn from './ModalBtn'

function Manual({state}) {
    const isOpen = state[0]

  return (
    <ReactModal isOpen={isOpen}>
        <div>MODAL</div>
        <ModalBtn state={state} value={"Close"}/>
    </ReactModal>
  )
}

export default Manual