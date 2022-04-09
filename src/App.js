import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Auth from "./pages/Auth";
import "./App.css";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/auth" element={<Auth />} />
        </Routes>
      </Router>
  );
}

export default App;
