import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./layout/Layout.tsx";
import App from "./App.tsx";
import RegisterMovie from "./pages/RegisterMovie.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import MovieList from "./pages/MovieList.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/register" element={<RegisterMovie />} />
          <Route path="/movies" element={<MovieList />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
