import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Textform from "./components/Textform";
import Data from "./components/Data";
import Home from "./components/Nav";

function App() {
  return (
    <Routes>
      <Home />
      <Route path="/" element={<Textform />} />
      <Route path="/Alltext" element={<Data />} />
    </Routes>
  );
}

export default App;
