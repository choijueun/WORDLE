import Puzzle from './components/views/Puzzle/Puzzle'
import Navbar from './components/views/Navbar/Navbar'
import Keyboard from './components/views/Keyboard/Keyboard';

import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <section id="PUZZLE" className="item-center">
                <Puzzle/>
                <Puzzle/>
                <Puzzle/>
                <Puzzle/>
                <Puzzle/>
            </section>
            <Keyboard/>
        </div>
    );
}

export default App;
