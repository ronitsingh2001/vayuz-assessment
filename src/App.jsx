import Sidebar from "./components/Sidebar";
import "./App.css";
import MainDiv from "./components/MainDiv";

export default function App() {
  return (
    <div className="flex">
        <Sidebar />
        <MainDiv />
    </div>
  );
}
