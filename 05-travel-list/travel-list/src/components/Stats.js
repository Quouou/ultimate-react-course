const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X</em>
    </footer>
  );
}
