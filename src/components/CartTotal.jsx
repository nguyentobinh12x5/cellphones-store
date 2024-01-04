import React from "react";
import { useSelector } from "react-redux";
import { selectAmount } from "../features/CartSlice";
const CartTotal = () => {
  const totalAmount = useSelector(selectAmount);
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "decimal",
    maximumFractionDigits: 3,
  });
  return (
    <div className="px-8 py-12 bg-slate-100">
      <h3 className="text-2xl font-medium uppercase pb-8">Cart total</h3>
      <div className=" flex justify-between border-b pb-2 uppercase">
        <p>Subtotal</p>
        <p className="text-sm">{formatter.format(totalAmount)} VND</p>
      </div>
      <div className=" flex justify-between pt-2 uppercase">
        <p>Total</p>
        <p className="text-xl">{formatter.format(totalAmount)} VND</p>
      </div>
      <div className="pt-8">
        <input
          placeholder="Enter you coupon"
          className="p-4 border w-full"
        ></input>
        <button className="p-4 text-center bg-black text-white w-full mt-4">
          Apply coupon
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
