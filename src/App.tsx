import "./App.css";
import { Logos } from "./components/Logos";
import { CounterButton } from "./components/counter";
import { Title } from "./components/Title";
import { LearnMore } from "./components/LearnMore";
import { NavBar } from "./components/NavBar";
import { useState } from "react";
import { CounterCard } from "./components/counter/CounterCard";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="layout">
      <aside className="sidebar">SideBar</aside>
      <div className="content">
        <header className="header">
          <NavBar />
        </header>
        <main className="main">
          <Logos />
          <Title title="This is the title" subtitle="This is a subtitle" />
          <Title title="This is bullshi" isImportant />
          <CounterButton setCount={setCount} />
          <CounterCard count={count} />
          <LearnMore />
        </main>
      </div>
    </div>
  );
}
