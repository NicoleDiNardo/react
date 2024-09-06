import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

type CounterState = {
  count: number;
  setCount: (count: number) => void;
};

const useAccountState = createWithEqualityFn<CounterState>(
  (set) => ({
    count: 0,
    setCount: (count: number) => set({ count }),
  }),
  Object.is
);

export function useCount() {
  const [count, setCount] = useAccountState(
    (state: CounterState) => [state.count, state.setCount],
    shallow
  );
  return [count, setCount] as [number, (count: number) => void];
}
