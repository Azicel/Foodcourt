import React, { useState, useEffect } from "react";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const items = [
    {
      id: 1,
      name: "Чипсы",
      price: 20,
    },
    {
      id: 2,
      name: "Карбонара",
      price: 32,
    },
    {
      id: 3,
      name: "Рамен",
      price: 51,
    },
  ];

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  const addToCart = (el) => {
      setCart([...cart, el]);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };

  const listItems = items.map((el) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input type="submit" value="Добавить" onClick={() => addToCart(el)} />
    </div>
  ));

  const cartItems = cart.map((el) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input type="submit" value="Убрать из корзины" onClick={() => removeFromCart(el)} />
    </div>
  ));

  return (
    <div>
      Товары
      <div>{listItems}</div>
      <div>В корзину</div>
      <div>{cartItems}</div>
      <div>Всего: ${cartTotal}</div>
    </div>
  );
};

export default Shop;