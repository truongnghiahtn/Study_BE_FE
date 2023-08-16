import "./App.css";
import { LogIn, Home } from "./app/page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<LogIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
