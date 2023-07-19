import React from "react";
import "./Cart.css";

const Carts = (Menu) => {
  const { id, img, h1, p } = Menu;

  return (
    <div className="cards">
      <div className="card" id={id}>
        <img src={img} />
        <div className="card-content">
          <h2>{h1}</h2>
          <p>{p}</p>
        </div>
      </div>
    </div>
  );
};

export default Carts;
