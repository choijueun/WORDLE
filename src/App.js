import Puzzle from './components/views/Puzzle/Puzzle'
import Navbar from './components/views/Navbar/Navbar'
import Keyboard from './components/views/Keyboard/Keyboard';

import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <hr/>
            <Puzzle/>
            <Keyboard/>
        </div>
    );
}

export default App;
