import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function LayOut() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default LayOut;
