import logo from './logo.svg';
import Puzzle from './components/views/Puzzle/Puzzle'
import Navbar from './components/views/Navbar/Navbar'
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="text-center">
                <Navbar/>
            </header>
            <section id="PUZZLE" className="item-center">
                <Puzzle/>
                <Puzzle/>
                <Puzzle/>
                <Puzzle/>
                <Puzzle/>
            </section>
        </div>
    );
}

export default App;
