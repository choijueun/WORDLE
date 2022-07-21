import { combineReducers } from "redux"

import modalState from './modalState'

// 여러 reducer를 하나로 묶어준다
const rootReducer = combineReducers({
    modalState
})

export default rootReducer;