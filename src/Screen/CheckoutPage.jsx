import React from "react";
import CartTotal from "../components/CartTotal";
import { useDispatch, useSelector } from "react-redux";
import { deleteTocart, selectCart } from "../features/CartSlice";
const CheckoutPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  return (
    <section className="padding">
      <h3 className="text-h3">Billing name</h3>
      <div className=" flex gap-8">
        <div className="w-[70%]">
          <h4 className="text-h4 mt-8">Full name</h4>
          <input
            type="text"
            placeholder="Enter Your Full Name Here!"
            className="input-checkout"
          ></input>
          <h4 className="text-h4">Email</h4>
          <input
            type="email"
            placeholder="Entern Your Email Here"
            className="input-checkout"
          ></input>
          <h4 className="text-h4">Phone Number</h4>
          <input
            type="number"
            placeholder="Enter Your Phone Number Here"
            className="input-checkout"
          ></input>
          <h4 className="text-h4">Address</h4>
          <input
            type="text"
            placeholder="Enter Your Address Here!"
            className="input-checkout"
          ></input>
          <button
            className="p-4 bg-black text-white text-lg"
            onClick={() => dispatch(deleteTocart(cart))}
          >
            Place Order
          </button>
        </div>
        <div className="w-[30%]">
          <CartTotal />
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
