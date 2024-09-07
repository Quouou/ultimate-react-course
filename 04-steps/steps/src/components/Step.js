export default function StepMessage({ step, children }) {
  return (
    <p className="message">
      <h2>Step {step}: </h2>
      {children}
    </p>
  );
}
