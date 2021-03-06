import React from "react";
import "../style/DishList.css";
function Dish({
  name,
  description,
  category,
  price,
  img,
  orderList,
  setOrderList,
}) {
  const addItem = (itemName) => {
    var found = 0;
    // var found = orderList.find((element)=>
    // element.name.name == itemName
    //  )
    for (var i = 0; i < orderList.length; i++) {
      if (orderList[i].name == itemName) found = 1;
    }
    if (found == 0)
      setOrderList(
        orderList.concat({
          name,
          price,
          img ,
          quantity: 1,
        })
      );
    console.log(orderList);
    // localStorage.setItem('orders',[JSON.stringify(orderList)])
  };

  // add to local sotrage and redirect to home
  // };
  return (
    <li key={name}>
      <h3 className="titlest">{name}</h3>
      {img ? <img width="220px" height="240px" src={img} alt="" /> : null}
      <div> {category}</div>
      <div className="descst">{description}</div>
      <div className="pricest">{price}$</div>
      <br></br>{" "}
      <button className="btnst" onClick={() => addItem(name)}>
        Add to order
      </button>
    </li>
  );
}

export default Dish;
