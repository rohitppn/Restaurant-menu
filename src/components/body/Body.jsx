import React from "react";
import "./Body.css";
import Carts from "./carts/Carts";
import Data from "../body/carts/Data.json";

const body = () => {
  return (
    <main>
      <div className="container">
        <div className="menu-container">
          {Data.map((Menu) => {
            return (
              <Carts img={Menu.img} h1={Menu.h1} p={Menu.p} id={Menu.id} />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default body;
