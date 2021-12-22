import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Home } from "./Pages/Home/Home";
import { SignUp } from "./Pages/Auth/SignUp";
import { Login } from "./Pages/Auth/Login";
import { UserProfile } from "./Pages/UserProfile/UserProfile";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./styles/style.css";
import QuizPage from "./Pages/Quiz/QuizPage";

library.add(fab, fas, faEnvelope);

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
