import React from "react";

function Cards({item}) {
  return (
    <>
      <div className="mt-4 my-3 ">
        <div className=" card bg-base-100 w-64 shadow-2xl hover:scale-105 duration-200 dark:bg-white dark:text-black dark:border">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="px-2 py-1 rounded-full border border-white hover:bg-pink-500 hover:text-white duration-200 cursor-pointer dark:border dark:border-black">Buy Now</div>
              <div className="px-4 py-1 rounded-2xl border border-white hover:bg-pink-500 hover:text-white duration-200 cursor-pointer dark:border dark:border-black">${item.price}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
