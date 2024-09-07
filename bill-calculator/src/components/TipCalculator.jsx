import { useState } from "react";
import BillInput from "./BillInput";
import Tips from "./Tips";
import Output from "./Output";
import Reset from "./Reset";

export default function TipsCalc() {
  const [bill, setBill] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [percentage1, setPercentage1] = useState(0);

  const tip = (bill * (percentage + percentage1)) / 2 / 100;

  const finalBill = bill + tip;

  function handleReset() {
    setBill("");
    setPercentage(0);
    setPercentage1(0);
  }
  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <Tips percentage={percentage} onSelect={setPercentage} />
      <Tips percentage={percentage1} onSelect={setPercentage1} />
      <Output bill={bill} tip={tip} finalBill={finalBill} />
      <Reset onReset={handleReset} />
    </div>
  );
}
