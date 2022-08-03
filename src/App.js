import {useEffect, useState} from 'react';
import './App.css';
import Menu from './components/menu/menu.js';
import ItemListContainer from './components/ItemListContainer/itemListContainer.js';
import Item from './components/Item/Item.js';
import getProducts from './data/data';

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getProducts.then((resp) => setData(resp))
    .catch((error) => console.log(error)).
    finally(setLoading(false));
  },[]);

  
  return (
    <div className="App">
      <header className="App-header">
        <Menu></Menu>
      </header>
      <ItemListContainer>

        {data.map((prod) => {

          return(
            <Item key={prod.id} 
                  img={prod.foto}
                  color={prod.color}
                  tipo={prod.tipo}
                  stock={prod.stock}
                  talle={prod.talle}
                  precio={prod.precio}
                  foto={prod.foto} ></Item> 
          );
        })}
      </ItemListContainer>
    </div>
  );
}

export default App;

