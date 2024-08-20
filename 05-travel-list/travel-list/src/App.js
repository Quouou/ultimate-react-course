import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/Packinglist";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  return (
    <div className="app">
      <Logo />
      <Form onAdditems={handleItems} />
      <PackingList
        items={items}
        setItems={setItems}
        onDeleteItem={handleDeleteItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
