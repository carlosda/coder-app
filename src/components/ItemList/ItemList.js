
import './ItemList.css';
import Item from '../Item/Item';


function ItemList({itemList}) {

    return (
        <div className="ItemList">

            {itemList.map((prod) => {
                return (
                    <Item key={prod.id} {...prod}></Item>              
                );
            })}

        </div>
    );
}

export default ItemList;