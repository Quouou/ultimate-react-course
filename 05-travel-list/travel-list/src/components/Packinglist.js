const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Ban", quantity: 19, packed: true },
];

export default function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((Item) => {
          return (
            <li key={Item.id}>
              <span
                style={Item.packed ? { textDecoration: "line-through" } : {}}
              >
                {Item.quantity} {Item.description}
              </span>
              <button>❌</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
