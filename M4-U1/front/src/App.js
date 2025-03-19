
import './App.css';
import Header from './components/layout/Header.js';
import Nav from './components/layout/Nav.js';
import Footer from './components/layout/Footer.js';
import Main from './components/layout/Main.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Nav />
        <Main />
        <Footer />
      </header>
    </div>
  );
}

export default App;
