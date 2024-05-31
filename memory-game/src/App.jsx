import logo from "./logo.svg";
import "./App.css";
import Board from "./Components/Board";

export default function App() {
  return (
    <div className="w-[100vw] h-[100vh]  flex justify-center items-center">
      <Board />
    </div>
  );
}
