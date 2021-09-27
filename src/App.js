import './App.css';
import NavBar from './components/NavBar/NavBar';
import {ItemCount}  from './components/ItemCount/ItemCount';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
        
        <NavBar/>
        <ItemListContainer/>
        <ItemCount stock={5} initial={1} />

    </div>
  );
}

export default App;
