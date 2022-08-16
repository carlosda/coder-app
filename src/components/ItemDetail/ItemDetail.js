import {useState} from 'react';
import Card from 'react-bootstrap/Card';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail(props) {

    const [data, setData] = useState([]);


    const onAdd = (quantity) => {
        setData(quantity);
        console.log(data);
    };


    function render() {
        return (
            <Card>
                <Card.Header>Detalle Producto</Card.Header>
                <Card.Body>
                    <Card.Title>{props.tipo}</Card.Title>

                    <div className='ItemDetail'>

                        <img src={props.foto} alt='foto producto' width="100px" height="auto" />

                        <div>

                            <p>Color: {props.color}</p>
                            <p>Talle: {props.talle} </p>
                            <p>Precio: {props.precio} </p>   


                        </div>

                        <ItemCount stock={props.stock} initial="1" callback={onAdd} ></ItemCount>



                    </div>    



                </Card.Body>
            </Card>
        );

    }



    return (

        <div>
            {render()}
        </div>

    );
}

export default ItemDetail;