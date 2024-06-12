import { useEffect, useState } from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";

const cartItem = [
  {
    productId: "dfsdrijfkfdaks",
    photo:
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "ipad",
    price: 3000,
    quantity: 4,
    stock: 10,
  },
  {
    productId: "dfsdrijfkfdaks5er",
    photo:
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "iphone",
    price: 5000,
    quantity: 12,
    stock: 2,
  },
];
// cartItem.length > 0 ? console.log(true) : console.log(false);
const subTotal = 3000;
const tax = Math.round(subTotal * 0.18);
const shippingCharge = 200;
const discount = 100;
const total = subTotal + shippingCharge;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <div className="cart">
      <main>
        {cartItem.length > 0 ? (
          cartItem.map((i, index) => <CartItem key={index} cartItem={i} />)
        ) : (
          <h1 className="red">No Items Added</h1>
        )}
      </main>
      <aside>
        <p>Subtotal Price: ৳{subTotal}</p>
        <p>Shipping Charges: ৳{shippingCharge}</p>
        <p>tax: ৳{tax}</p>
        <p>
          Discount: <em className="red"> - ৳{discount}</em>
        </p>
        <p>
          <strong>Total:৳{total}</strong>
        </p>
        <input
          type="text"
          placeholder="Enter coupon code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ৳{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon code <RiErrorWarningFill />
            </span>
          ))}
        {cartItem.length > 0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;
