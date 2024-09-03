import "./App.css";
import { Logos } from "./components/Logos";
import { Counter } from "./components/Counter";
import { Title } from "./components/Title";
import { LearnMore } from "./components/LearnMore";
import { NavBar } from "./components/NavBar";

export function App() {
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
          <Counter />
          <LearnMore />
        </main>
      </div>
    </div>
  );
}
