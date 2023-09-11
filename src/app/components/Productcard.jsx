import React from "react";
import Image from "next/image";
const ProductCard = ({ product }) => {
  return (
    <div className="bg-slate-200 m-4 p-4 rounded-xl shadow-md ">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-50 shadow-xl object-contain rounded-md"
      />
      <div className="mt-4">
        <h2 className="text-xl text-black font-semibold">{product.name}</h2>
        <p className="text-black mt-2">{product.description}</p>
        <div className="mt-4">
          <p className="text-xl text-purple-800">${product.price}</p>
          <button className="mt-2 bg-black shadow-lg hover:shadow-black text-white rounded-md py-2 px-4 hover:bg-white hover:text-black">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
