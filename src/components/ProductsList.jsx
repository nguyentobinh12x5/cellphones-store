import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/FetchDataSlice";
import { useNavigate } from "react-router-dom";
const ProductsList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.data);
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "decimal",
    maximumFractionDigits: 3,
  });
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const productDetailHandle = (product) => {
    navigate(`/shop/${product.name}`);
  };
  return (
    <section className="max-container" id="productlist">
      <div className="padding">
        <div className="pb-4">
          <h3 className="text-h3 uppercase text-center">
            Top trending products
          </h3>
        </div>
        {products.loading && <div>loading...</div>}
        {!products.loading && products.error ? <div>Error</div> : null}
        {!products.loading && products.products.length ? (
          <div className="productList">
            {products.products.map((product, index) => (
              <div
                key={index}
                className="productItem"
                onClick={() => {
                  productDetailHandle(product);
                }}
              >
                <img
                  src={product.img1}
                  alt=""
                  className="object-contain cursor-pointer w-[245px] h-[270px]"
                />
                <h4 className="font-medium h-[3em]">{product.name}</h4>
                <p className="text-slate-gray">
                  {formatter.format(product.price)} VND
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ProductsList;
