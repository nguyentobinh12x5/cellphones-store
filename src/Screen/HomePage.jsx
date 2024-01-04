import React from "react";
import Content from "../components/Content";
import ProductsList from "../components/ProductsList";
import Addition from "../components/Addition";
import Subscribe from "../components/Subscribe";
const HomePage = () => {
  return (
    <>
      <section>
        <Content />
      </section>
      <section>
        <ProductsList />
      </section>
      <section>
        <Addition />
      </section>
      <section>
        <Subscribe />
      </section>
    </>
  );
};

export default HomePage;
