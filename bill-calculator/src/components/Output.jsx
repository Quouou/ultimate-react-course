export default function Output({ bill, tip, finalBill }) {
  return (
    <div>
      <h3>
        You pay ${finalBill}: (${bill} + ${tip})
      </h3>
    </div>
  );
}
