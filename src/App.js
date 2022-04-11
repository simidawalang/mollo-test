import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import "./App.css";
import Home from "./pages/home/index";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path="/auth/signup" element={<Signup />} />
          <Route exact path="/auth/login" element={<Login />} />
        </Routes>
      </Router>
  );
}

export default App;
