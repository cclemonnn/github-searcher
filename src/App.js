import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
