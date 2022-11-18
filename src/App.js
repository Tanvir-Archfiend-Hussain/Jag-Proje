import "./App.css";
import NavBAr from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
// https://www.youtube.com/watch?v=VzWBLj_CfpE 15 min in

function App() {
  return (
    <Router>
      <NavBAr />
    </Router>
  );
}

export default App;
