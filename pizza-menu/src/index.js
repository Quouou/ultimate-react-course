import React, { useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast Pizzaria Co.</h1>
    </header>
  );
}

function Menu() {
  const numberOfPizzas = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numberOfPizzas > 0 ? (
        <>
          <p>Authentic Italian Cuisines. Bla Bla Bla Bla Bla Bla</p>;
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza
                key={pizza.name}
                name={pizza.name}
                ingredient={pizza.ingredients}
                photoName={pizza.photoName}
                price={pizza.price}
                soldOut={pizza.soldOut}
              />
            ))}
          </ul>
        </>
      ) : null}
    </main>
  );
}

function Pizza({ name, ingredient, photoName, price, soldOut }) {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h1>{name}</h1>
        <p>{ingredient}</p>
        <span>{soldOut ? "Sold Out" : price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <div className="order">
            <p>
              {time} We are currently {isOpen ? "open" : "close"}
            </p>
            <button className="btn">Order</button>
          </div>
        ) : (
          <p>
            {time} We are currently close. We will open at {openHour} AM
          </p>
        )}
        <p>&copy; 2021 Fast Pizzaria Co.</p>
      </div>
    </footer>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
