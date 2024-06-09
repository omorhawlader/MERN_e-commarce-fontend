import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */
type CartItemProps = {
  cartItem: any;
};

const CartItem = ({ cartItem }: CartItemProps) => {
  return (
    <div className="cart-item">
      <img src={cartItem.photo} alt={cartItem.name} />
      <article>
        <Link to={`/product/${cartItem.productId}`}>{cartItem.name}</Link>
        <span>৳{cartItem.price}</span>
      </article>
      <div>
        <button>+</button>
        <p>0</p>
        <button>-</button>
      </div>
      <button>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
