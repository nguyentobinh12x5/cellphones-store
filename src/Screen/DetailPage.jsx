import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../features/CartSlice";
import { selectData, selectProductByName } from "../features/FetchDataSlice";
const DetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const productName = params.ProductName;
  const products = useSelector(selectData);
  const product = useSelector((state) =>
    selectProductByName(state, productName)
  );
  const [quantity, setQuantity] = useState(1);
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    setQuantity(quantity - 1);
  };
  const images = [product.img1, product.img2, product.img3, product.img4];
  const filterCategory = products.filter(
    (p) => p.category === product.category && p.name !== product.name
  );
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "decimal",
    maximumFractionDigits: 3,
  });
  const [currentImg, setCurrentImg] = React.useState(product.img1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productName]);
  return (
    <section className="padding max-container" id="product-detail">
      <div>
        <div
          key={product.name}
          className="max-container flex flex-col sm:flex-row gap-8 justify-center"
        >
          <div className="w-full sm:w-1/2">
            <div className=" bg-gray-100 rounded-lg">
              <div className="p-6">
                <img src={currentImg} alt="" />
              </div>
            </div>
            <div className="flex flex-row gap-2 w-[20%] pt-2">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="image-product"
                  className="object-contain cursor-pointer border-2 rounded-lg transform hover:scale-110 transition-transform duration-200"
                  onClick={() => setCurrentImg(img)}
                />
              ))}
            </div>
          </div>
          <div className="w-full sm:w-1/2 italic">
            <h3 className=" text-[32px] font-medium">{product.name}</h3>
            <p className=" text-2xl  py-4 text-slate-gray">
              {formatter.format(product.price)} VND
            </p>
            <p className=" py-4 text-slate-gray">{product.short_desc}</p>
            <div className="flex gap-2 pb-4">
              <p className=" font-palanquin font-bold">CATEGORY</p>
              <p className=" text-slate-gray">{product.category}</p>
            </div>
            <button
              className="py-2 px-4 bg-black text-white"
              onClick={() =>
                dispatch(addTocart({ item: product, quantity: quantity }))
              }
            >
              Add to cart
            </button>
            <button className="py-2 px-4" onClick={handleDecrease}>
              -
            </button>

            <span>{quantity}</span>

            <button className="py-2 px-4" onClick={handleIncrease}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <h3 className="uppercase text-xl py-8 text-center font-semibold">
          Product Description
        </h3>
        <p className="text-slate-gray italic whitespace-pre-wrap">
          {product.long_desc}
        </p>
      </div>
      <div className="py-8">
        <h3 className="uppercase text-xl text-center font-semibold">
          Relate Product
        </h3>
        <div className="productList">
          {filterCategory.map((product, index) => (
            <div key={index} className="productItem">
              <Link to={`/shop/${product.name}`}>
                <img
                  src={product.img1}
                  alt=""
                  className="object-contain cursor-pointer"
                />
                <h4 className="font-medium">{product.name}</h4>
                <p className=" italic text-slate-gray">
                  {formatter.format(product.price)} VND
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
