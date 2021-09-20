import './App.css';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ListContainer from './components/ListContainer/ListContainer';



function App() {
  return (
    <div className="App">
        <CartWidget/>
        <NavBar/>
        <ListContainer/>

    </div>
  );
}

export default App;
