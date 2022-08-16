import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail(props) {

    const [data, setData] = useState([]);

    const InputCount = () => {
        return (
            <ItemCount stock={props.stock} initial="1" callback={onAdd} ></ItemCount>
        )
     };

    const toCart = () => { 
        return (
            <Button variant="primary" onClick={buttonCartListener}>Finalizar Compra</Button>
        )
    };


    const onAdd = (quantity) => {
        setData(quantity);
        console.log(data);
    };

    function buttonCartListener () {
        navigateFn(`/cart`);
    }


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

                    </div>

                    {InputCount()}
                    {toCart()}

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