import { useState } from "react";
import "./App.css";
import Products from "./components/Products";
// import UseCallback from "./components/UseCallback";
// import UseMemo from "./components/UseMemo";

// const phones = [
//   {
//     id: 1,
//     name: "ip15",
//     price: 2000,
//   },
//   {
//     id: 2,
//     name: "ip14",
//     price: 1000,
//   },
//   {
//     id: 1,
//     name: "ipX",
//     price: 9000,
//   },
// ];

function App() {

  return (
    <>
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      <Products/>
    </>
  );
}

export default App;
