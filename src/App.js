import './App.css';
import Menu from './components/menu/menu.js';
import ItemListContainer from './components/ItemListContainer/itemListContainer.js';
import Item from './components/Item/Item.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu></Menu>
      </header>
      <ItemListContainer>
	<Item></Item>
      </ItemListContainer>
    </div>
  );
}

export default App;
