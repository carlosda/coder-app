import './itemListContainer.css'


function ItemListContainer(props) {
    return (
        <>
            <div className='ItemlistContainer'>
                {props.children}
            </div>
        </>
    );
}

export default ItemListContainer;
