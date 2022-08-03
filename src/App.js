import './App.css';
import Menu from './components/menu/menu.js';
import ItemListContainer from './components/ItemListContainer/itemListContainer.js';
import ItemList from './components/ItemList/ItemList';


function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <Menu></Menu>
      </header>
      <ItemListContainer>

        <ItemList></ItemList>
 
      </ItemListContainer>
    </div>
  );
}

export default App;

