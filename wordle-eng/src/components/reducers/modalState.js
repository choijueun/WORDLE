const MANUAL = 'modalState/MANUAL'

// export const setManualState = data=>({ type: MANUAL, data })
export const setManualState = (data)=>{
    return {type:MANUAL, data}
}

const initialState = {
    manual: false
}

const modalState = (state=initialState, action)=>{
    switch(action.type) {
        case MANUAL:
            return {...state, manual:action.data}
        default:
            return state
    }
}
export default modalState