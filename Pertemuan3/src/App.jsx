import { useState } from "react";
import "./App.css";
import Profile from "./Profile";
import Header from "./Header";
import Todolist from "./Todolist";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Header />
      <Todolist name="Ichwan" />
      <Profile nama="Ichwan" alamat="Bogor" umur="20" />
      <img src="https://picsum.photos/500/300" alt="gambar-random" />
      <Footer nama="Ichwan" />
    </>
  );
};

export default App;
