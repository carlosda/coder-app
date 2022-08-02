import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount.js';

function Item() {

  const onAdd = () => {
      console.log('Item agregado');

     return;
  }


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Remera Fashion</Card.Title>
        <Card.Text>
          $1500
        </Card.Text>
        <ItemCount stock="5" initial="1" callback={onAdd} ></ItemCount>
      </Card.Body>
    </Card>
  );
}

export default Item;
