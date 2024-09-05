import "./App.css";
import { Header } from "./layout/Header";
import { Main } from "./layout/Main";

export function App() {
  return (
    <div className="layout">
      <aside className="sidebar">SideBar</aside>
      <div className="content">
        <Header />
        <Main />
      </div>
    </div>
  );
}
