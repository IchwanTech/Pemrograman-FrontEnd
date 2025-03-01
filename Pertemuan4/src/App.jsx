import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";

const App = () => {
  const users = [
    {
      nama: "Ichwan",
      membership: "Premium",
    },
    {
      nama: "Noer",
      membership: "Platinum",
    },
    {
      nama: "Fitrah",
      membership: "Gold",
    },
  ];
  return (
    <>
      <Header />
      {users.map((user, index) => {
        return (
          <Content key={index} nama={user.nama} membership={user.membership} />
        );
      })}
      <Footer nama="Ichwan" />
    </>
  );
};

export default App;
