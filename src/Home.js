import React from "react";
import Navbar from "./Navbar";

import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="body bg-orange-100 ">
      <Navbar />
      <Outlet />
      
    </div>
  );


}
export default Home;