import './App.css';
import NavBar from './components/NavBar/NavBar';
import ListContainer from './components/ListContainer/ListContainer';



function App() {
  return (
    <div className="App">
        
        <NavBar/>
        <ListContainer Products={1}/>

    </div>
  );
}

export default App;
