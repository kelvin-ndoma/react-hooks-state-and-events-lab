import React,{useState} from "react";

function Item({ name, category }) {
  const[IsInCart, setInCart] = useState(false)

  function handleCart(){
    setInCart((IsInCart) => !IsInCart)
  }

  const listClass = IsInCart? "in-cart" : ""
  const btnText= IsInCart? "Remove From Cart" : "Add to Cart"
  return (
    <li className={listClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className="add">{btnText}</button>
    </li>
  );
}

export default Item;