import {useEffect, useState} from 'react';
import './itemListContainer.css';
import ItemList from '../ItemList/ItemList';
import DataApi from '../../data/data';


function ItemListContainer(props) {

    const [data, setData] = useState([]);
    

    useEffect(() => {
        DataApi.getProducts().then((resp) => setData(resp))
            .catch((error) => console.log(error))
            .finally(console.log('Finalizo lectura de datos'));        
    }, []);


    return (
        <>
            <div className='ItemlistContainer'>
                <ItemList itemList={data}></ItemList>
            </div>
        </>
    );
}

export default ItemListContainer;
