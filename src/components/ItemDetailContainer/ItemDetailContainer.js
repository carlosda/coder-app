import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail.js';
import DataApi from '../../data/data.js';


function ItemDetailContainer() {

    const {idProduct} = useParams(); 
    const [data, setData] = useState([]);
    
    
    useEffect(() => {
        
        DataApi.getDetailProd(idProduct).then((resp) => setData(resp))
            .catch((error) => console.log(error))
            .finally(console.log('Lectura datos finalizada'));     
       
        }, [idProduct]);


    return (
        <>
            <div className='ItemDetailContainer'>
                <ItemDetail {...data}></ItemDetail>
            </div>
        </>
    );
}

export default ItemDetailContainer;
