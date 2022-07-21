import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

import Keyboard from './components/keyboard/Keyboard';
import RootModal from './components/modals/RootModal';
import { setManualState } from './components/reducers/modalState';

function ExBtn(){
    const dispatch = useDispatch()
    const isOpen = useSelector(state=>state.modalState.manual)
    function setIsOpen(){
        dispatch(setManualState(!isOpen))
    }

    return <Button variant="primary" onClick={setIsOpen}>
        MANUAL
    </Button>
}

function App() {
    return (
    <div className="App">
        {/* 제목 */}
        {/* 네모네모 */}

        {/* 키보드 */}
        <Keyboard />
        
        <ExBtn/>
        {/* Modal */}
        <RootModal />
    </div>
    );
}

export default App;
