import { useCount } from "../../state/counter.state";

export function CounterCard() {
  const [count, setCount] = useCount();
  return <div className="card">{count}</div>;
}
