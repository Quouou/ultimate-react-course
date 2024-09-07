export default function BillInput({ bill, setBill }) {
  return (
    <div>
      <label htmlFor="bill">How much was the bill:</label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}
