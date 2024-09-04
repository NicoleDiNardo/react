export function CounterButton({
  setCount,
}: {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </div>
  );
}
