import { ChangeEvent, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const [ShippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });
  const nativegate = useNavigate();

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setShippingInfo((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  return (
    <div className="shipping">
      <button className="back-btn" onClick={() => nativegate("/cart")}>
        <IoIosArrowBack />
      </button>

      <form>
        <h2>Shipping Address</h2>

        <input
          type="text"
          required
          placeholder="address"
          name="address"
          value={ShippingInfo.address}
          onChange={onChangeHandler}
        />
        <input
          type="text"
          required
          placeholder="city"
          name="city"
          value={ShippingInfo.city}
          onChange={onChangeHandler}
        />
        <input
          type="text"
          required
          placeholder="state"
          name="state"
          value={ShippingInfo.state}
          onChange={onChangeHandler}
        />
        <select
          name="country"
          value={ShippingInfo.country}
          required
          onChange={onChangeHandler}
        >
          <option value="">Select Country</option>
          <option value="bangladesh">Bangladesh</option>
          <option value="saudi">Saudi Arab</option>
          <option value="iran">Iran</option>
        </select>

        <input
          type="number"
          required
          placeholder="pincode"
          name="pincode"
          value={ShippingInfo.pincode}
          onChange={onChangeHandler}
        />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Shipping;
