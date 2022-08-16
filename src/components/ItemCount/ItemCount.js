import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import './ItemCount.css'

function ItemCount(props) {
	
    const [contador, setContador] = useState(0);
    const [decButton, setDecButton] = useState(1);
    const [incButton, setIncButton] = useState(1);

    useEffect(() => {
       setContador(parseInt(props.initial));
       setDecButton(true);
       setIncButton(false);

      return () => { }
    },[props.initial]);

    function incrementaContador() {
	setContador(contador+1);
        setDecButton(false);
        if (contador == parseInt(props.stock)) {
            setIncButton(true);

        }
 
    }

    function decrementaContador() {

        setContador(contador-1);
        setIncButton(false);
	
	if (contador == parseInt(props.initial)) { 
	  setDecButton(true);

        }      


    }

    function callBackFunc() {

        props.callback(contador);

    }
	
	
    return (
        <>
            <div className="ItemCount">
		<p> (Stock: {props.stock} unid.) </p>

		<div className="ItemCount-controls">
			<Button variant="primary" onClick={decrementaContador} disabled={decButton} >-</Button>
			<p> {contador} </p>
			<Button variant="primary" onClick={incrementaContador} disabled={incButton} >+</Button>
		</div>

		<Button variant="primary"onClick={callBackFunc}>Agregar al carrito</Button>		

            </div>

        </>
    );
}

export default ItemCount;
