import { useEffect, useState } from "react";

const messages = ["Hello", "How are you?", "Goodbye"];

export default function App() {
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(true);
  // const [time, setTime] = useState(new Date().toLocaleTimeString());
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime(new Date().toLocaleTimeString());
  //   }, 1000);
  //   return () => clearInterval(interval);
  // });
  function handlePrevious() {
    step > 1 ? setStep((prevStep) => prevStep - 1) : setStep(3);
  }

  function handleNext() {
    step < 3 ? setStep((prevStep) => prevStep + 1) : setStep(1);
  }
  return (
    <>
      <button className="close" onClick={() => setOpen(!open)}>
        &times;
      </button>
      {open && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Back
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
