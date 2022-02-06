import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PriceFilter from "./components/PriceFilter";
import DishesList from "./components/DishesList";
import CatFilter from "./components/CatFilter";
import OrderList from "./components/OrderList";

import { useState, useCallback } from 'react';
import { render } from 'react-dom';
import { useModal } from 'react-hooks-use-modal';

function App() {
  const [priceFilter, setPriceFilter] = React.useState([0.5, 9]);
  const [catFilter, setCatFilter] = React.useState("all");
  const [orderList,setOrderList] = React.useState([]);
  console.log(orderList)

  const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: false
  });

  //use effect and get orderlist from a storage (once)

  return (
    <div className="App">
      <button onClick={open}>My Order {orderList.length}</button>
                                       {/* data length from local storage */}
      <Modal className="orderList">
        <div>
          <OrderList orderList={orderList} setOrderList={setOrderList} /> 
          <button onClick={close}>CLOSE</button>
        </div>
      </Modal>

      <h1> Hand to mouth resturant </h1>
      <PriceFilter
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
      ></PriceFilter>
      <CatFilter catFilter={catFilter} setCatFilter={setCatFilter}></CatFilter>
      <DishesList catFilter={catFilter}  priceFilter={priceFilter} orderList={orderList} setOrderList={setOrderList}>
      </DishesList>

  

    </div>
  );
}

export default App;
