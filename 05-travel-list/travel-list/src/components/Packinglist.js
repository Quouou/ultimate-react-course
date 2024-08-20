import { useState } from "react";

export default function PackingList({ items, setItems, onDeleteItem }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => a.packed - b.packed);

  function handleDeleteList() {
    if (window.confirm("Are you sure you want to clear the list?")) {
      setItems([]);
    }
  }

  function handleStrikeThrough(item) {
    setItems((items) =>
      items.map((i) => (i.id === item.id ? { ...i, packed: !i.packed } : i))
    );
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((Item) => {
          return (
            <li key={Item.id}>
              <span
                style={Item.packed ? { textDecoration: "line-through" } : {}}
                onDeleteItem={onDeleteItem}
                handleStrikeThrough={handleStrikeThrough}
              >
                <input
                  type="checkbox"
                  value={Item.packed}
                  onChange={() => handleStrikeThrough(Item)}
                />{" "}
                {Item.quantity} {Item.description}
              </span>
              <button onClick={() => onDeleteItem(Item.id)}>❌</button>
            </li>
          );
        })}
      </ul>
      <div className="action">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed Status</option>
        </select>
        <button onClick={handleDeleteList}>Clear List</button>
      </div>
    </div>
  );
}
