import './App.css';
import Menu from './components/menu/menu.js';
import ItemListContainer from './components/ItemListContainer/itemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';



function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <Menu></Menu>
      </header>
      <ItemListContainer></ItemListContainer>
      <ItemDetailContainer></ItemDetailContainer>
    </div>
  );
}

export default App;

