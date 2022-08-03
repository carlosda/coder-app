
import {useEffect, useState} from 'react';
import './ItemList.css';
import Item from '../Item/Item';
import getProducts from '../../data/data';


function ItemList() {

    const [data, setData] = useState([]);
    

    useEffect(() => {
        getProducts.then((resp) => setData(resp))
            .catch((error) => console.log(error))
            .finally(console.log('Finalizo lectura de datos'));
    }, []);

    return (
        <div className="ItemList">

            {data.map((prod) => {

                return (

                    
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

        </div>
    );
}

export default ItemList;