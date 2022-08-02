import './itemListContainer.css'


function ItemListContainer(props) {
    return (
        <>
            <div>                
		{props.children}
            </div>
        </>
    );
}

export default ItemListContainer;
