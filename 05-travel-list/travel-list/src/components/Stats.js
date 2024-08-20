export default function Stats({ items }) {
  if (!items.length) {
    return <footer className="stats">You have no items on your list</footer>;
  }
  const packedItems = items.filter((item) => item.packed);
  const percentage = Math.round((packedItems.length / items.length) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Congrats! You are ready to go! 🚇"
          : ` You have ${
              items.length
            } items on your list, and you already packed${" "}
        ${packedItems.length} (${percentage}%) of your items.`}
      </em>
    </footer>
  );
}
