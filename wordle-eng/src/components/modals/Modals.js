import React, { useState } from 'react'

import Manual from './Manual'
import ModalBtn from './ModalBtn'


function Modals() {
    // MANUAL
    const manualState = useState(false)

    return (
    <>
        {/* Manual Modal */}
        <ModalBtn state={manualState} value={"Open Manual"}/>
        <Manual state={manualState}/>
    </>
    )
}

export default Modals