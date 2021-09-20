import './App.css';
import NavBar from './components/NavBar/NavBar';
import Products from './components/Products/Products';
import CartWidget from './components/CartWidget/CartWidget';
import ListContainer from './components/ListContainer/ListContainer';



function App() {
  return (
    <div className="App">
        <CartWidget/>
        <NavBar/>
        <Products/>
        <ListContainer/>

    </div>
  );
}

export default App;
