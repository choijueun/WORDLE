import React, { useState } from 'react'

import Manual from './Manual'

function Modals() {
    // MANUAL
    const [isManualOpen, setIsManualOpen] = useState(false)
    function toggleManual(){
        setIsManualOpen(!isManualOpen)
    }

    return (
    <>
        <button onClick={toggleManual}>Manual</button>
        <Manual isOpen={isManualOpen}/>
    </>
    )
}

export default Modals