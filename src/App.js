import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./Component/Nav/Nav";
import ConfigRoutes from "./ConfigRoutes";

function App() {
  return (
    <div className="App">
      <Nav />
      <ConfigRoutes />
    </div>
  );
}

export default App;
