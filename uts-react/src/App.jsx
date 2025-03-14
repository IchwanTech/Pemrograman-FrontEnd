import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Pesantren from "./pages/pesantren/Pesantren";
import KabupatenList from "./pages/pesantren/KabupatenList";
import DetailPesantren from "./pages/pesantren/DetailPesantren";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="pesantren" element={<Pesantren />}></Route>
          <Route path="/kabupaten/:provinsiId" element={<KabupatenList />} />
          <Route path="/pesantren/:kabupatenId" element={<DetailPesantren />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
