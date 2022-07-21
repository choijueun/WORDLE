import React from 'react'

function ModalBtn({state, value}){
    const isOpen = state[0]
    const setIsOpen = state[1]

    return <button onClick={()=>{setIsOpen(!isOpen)}}>
        {value}
    </button>
}

export default ModalBtn