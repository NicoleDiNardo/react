import { useCount } from "../../state/counter.state";

export function CounterButton() {
  const [count, setCount] = useCount();

  return (
    <div className="card">
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
