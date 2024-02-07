import React, { useContext } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import './CartButton.css';

import AppContext from '../../context/AppContext';

function CartButton() {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button
      type="button"
      className="cart-button"
      onClick={() => setIsCartVisible(!isCartVisible)}
    >
      <CiShoppingCart />
      {cartItems.length > 0 && (
        <span className="cart-status">{cartItems.length}</span>
      )}
    </button>
  );
}

export default CartButton;
