import cart from './cart.svg';
import './CartWidget.css'

function CartWidget() {
    return (
        <>
            <div>
                <img src={cart} className="cart-icon" alt="cart" />

            </div>

        </>
    );
}

export default CartWidget;