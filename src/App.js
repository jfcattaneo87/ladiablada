import './App.css';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <div className="App">
        <CartWidget/>
        <NavBar/>
        <ItemListContainer/>
        
    </div>
  );
}

export default App;
