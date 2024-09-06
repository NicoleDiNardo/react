import { Logos } from "../components/Logos";
import { CounterButton } from "../components/counter";
import { Title } from "../components/Title";
import { LearnMore } from "../components/LearnMore";
import { CounterCard } from "../components/counter/CounterCard";

export function Main() {
  return (
    <main className="main">
      <Logos />
      <Title title="This is the title" subtitle="This is a subtitle" />
      <Title title="This is bullshi" isImportant />
      <CounterButton />
      <CounterCard />
      <LearnMore />
    </main>
  );
}
