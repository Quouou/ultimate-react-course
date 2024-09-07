export default function Tips({ percentage, onSelect }) {
  return (
    <div>
      <h2>How was the service?</h2>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="5">Eh (5%)</option>
        <option value="15">Noice (15%)</option>
        <option value="50">Very Noice (50%)</option>
      </select>
    </div>
  );
}
