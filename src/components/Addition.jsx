import React from "react";
import { additions } from "../data/data";
const Addition = () => {
  return (
    <section className=" bg-slate-100" id="Additions">
      <div className="flex padding items-center justify-around">
        {additions.map((addition, index) => (
          <div key={index}>
            <h4 className="font-medium text-2xl uppercase pb-2">
              {addition.title}
            </h4>
            <p className=" text-slate-gray italic">{addition.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Addition;
