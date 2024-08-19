import { useState } from "react";

export default function Counter() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setSteps(1);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={steps}
          onChange={(e) => setSteps(Number(e.target.value))}
        />
        <span>Steps: {steps}</span>
      </div>
      <div>
        <button onClick={() => setCount(count - steps)}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount(count + steps)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count != 0 || steps != 1 ? (
        <button onClick={handleReset}> Reset </button>
      ) : (
        ""
      )}
    </div>
  );
}
