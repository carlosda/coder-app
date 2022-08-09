import {useEffect, useState} from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail.js';
import DataApi from '../../data/data.js';


function ItemDetailContainer(props) {

    const [data, setData] = useState([]);
    const id = 2;
    

    useEffect(() => {
        DataApi.getDetailProd(id).then((resp) => setData(resp))
            .catch((error) => console.log(error))
            .finally(console.log('Lectura datos finalizada'));        
    }, []);


    return (
        <>
            <div className='ItemDetailContainer'>
                <ItemDetail {...data}></ItemDetail>
            </div>
        </>
    );
}

export default ItemDetailContainer;
