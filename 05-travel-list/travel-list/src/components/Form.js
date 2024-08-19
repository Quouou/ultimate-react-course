import React, { useState } from "react";

export default function Form() {
  const [desc, setDesc] = useState("");
  const [value, setValue] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    if (!desc) return;

    const newItem = { desc, value, packed: false, id: Date.now() };
    console.log(newItem);

    setDesc("");
    setValue(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={value} onChange={(e) => setValue(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
