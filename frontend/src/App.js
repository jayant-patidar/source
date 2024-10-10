import "./App.css";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import axios from "axios";
import Navbar from "./utils/Navbar";

function App() {
  // For deployed app, use following URLs
  //axios.defaults.baseURL = "";
  //axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

  // For Local Host, use following URLs
  axios.defaults.baseURL = "http://localhost:8000";

  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar /> {/* Add the Navbar component here */}
        <ScrollToTop>
          <Router />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
