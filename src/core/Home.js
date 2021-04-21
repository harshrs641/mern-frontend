import React from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
const Home = () => {
  console.log("API IS ", API);
  return (
    <Base>
      <div>
        <h1 className="text-white">Hello FrontEnd</h1>
      </div>
    </Base>
  );
};
export default Home;
