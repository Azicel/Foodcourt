import React, { useState, useEffect } from "react";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const items = [{
    Dish_ID: 1,
    Dish_Name: "Шаурма",
    Description: "Вкуснейшая шаурма в городе!",
    Composition: "Лаваш, свинина, огурцы, помидоры, майонез",
    Callories: 500,
    Weight: 0.3,
    Dish_Cost: 250,
    Restaurant_ID: 1
},
{
    Dish_ID: 2,
    Dish_Name: "Шаурма",
    Description: "Сырный шаваш, свинина, овощи",
    Composition: "Лаваш, огурцы, помидоры, свинина,майонез",
    Callories: 3000,
    Weight: 0.5,
    Dish_Cost: 215,
    Restaurant_ID: 1
},
{
    Dish_ID: 6,
    Dish_Name: "Пицца",
    Description: "Пицца с Ананасами",
    Composition: "Тесто, сыр, Ананас",
    Callories: 1000,
    Weight: 0.3,
    Dish_Cost: 2000,
    Restaurant_ID: 1
},]

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].Dish_Cost;
    }
    setCartTotal(totalVal);
  };

  const addToCart = (el) => {
      setCart([...cart, el]);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.Dish_ID !== el.Dish_ID);
    setCart(hardCopy);
  };

  const listItems = items.map((el) => (
    <div key={el.Dish_ID}>
      {`${el.Dish_Name}: $${el.Dish_Cost}`}
      <input type="submit" value="Добавить" onClick={() => addToCart(el)} />
    </div>
  ));

  const cartItems = cart.map((el) => (
    <div key={el.Dish_ID}>
      {`${el.Dish_Name}: $${el.Dish_Cost}`}
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