import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../features/CartSlice";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";
import { left, right } from "../assets/icons";
import { useNavigate } from "react-router-dom";
const CartPage = () => {
  const cart = useSelector(selectCart);
  const navigate = useNavigate();
  return (
    <>
      <section className=" bg-slate-100 padding">
        <div className="uppercase font-medium flex flex-1 justify-between items-center italic">
          <h2 className="text-3xl">Cart</h2>
          <p className="text-xl text-slate-gray">Cart</p>
        </div>
      </section>
      <section className="padding">
        <h2 className=" uppercase font-medium pb-4 text-2xl">Shopping Cart</h2>
        <div className="flex flex-col sm:flex-row gap-8">
          <table className="w-full sm:w-[70%] h-16">
            <tr className=" bg-slate-100">
              <th className=" w-[20%] p-4">IMAGE</th>
              <th className=" w-[20%] p-4">PRODUCT</th>
              <th className=" w-[20%] p-4">PRICE</th>
              <th className=" w-[20%] p-4">QUANLITY</th>
              <th className=" w-[20%] p-4">TOTAL</th>
              <th className=" w-[20%] p-4"> REMOVE</th>
            </tr>
            {cart &&
              Object.values(cart).map((item) => (
                <CartItem key={item.name} item={item} />
              ))}
          </table>
          <div className="w-full sm:w-[30%]">
            <CartTotal />
          </div>
        </div>
        <div className="flex p-4 justify-between w-[68%] bg-slate-100">
          <div className="p-2 flex gap-2">
            <img src={left} alt="" width={12} height={12} />
            <button onClick={() => navigate("/shop")}>Continue Shopping</button>
          </div>
          <div className="border p-2 border-black flex gap-2">
            <button onClick={() => navigate("/checkoutpage")}>
              Proceed to checkout
            </button>
            <img src={right} alt="" width={12} height={12} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
