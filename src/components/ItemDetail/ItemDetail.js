import Card from 'react-bootstrap/Card';
import './ItemDetail.css'

function ItemDetail(props) {


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