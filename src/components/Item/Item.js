import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount.js';

function Item(props) {

  const onAdd = () => {
      console.log('Item agregado');

     return;
  }
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.foto} width="100px" height="180"/>
      <Card.Body>
        <Card.Title>{props.tipo}</Card.Title>
        <Card.Text>
          ${props.precio}
        </Card.Text>
        <p>{props.color},{props.talle}</p>
        <ItemCount stock={props.stock} initial="1" callback={onAdd} ></ItemCount>
      </Card.Body>
    </Card>
  );
}

export default Item;
