import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./pages/blog/Blog";
import About from "./pages/About";
import Home from "./pages";
import ErrorPage from "./pages/ErrorPages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
