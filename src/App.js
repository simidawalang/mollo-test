import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import "./App.css";
import Home from "./pages/home/index";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path="auth" element={<Auth />} />
        </Routes>
      </Router>
  );
}

export default App;
