import React, { Component } from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Weather from "./pages/Weather";
import NavItems from "./components/NavItems"
import Calculator from "./pages/Calculator";
import { Link, Outlet } from "react-router-dom"

export default function App() {
  return (
    <div className="App">
      <h3 className="mainTitle">My Widgets</h3>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="calculator" element={<Calculator />} />
          <Route path="weather" element={<Weather />} />
          <Route path="*" element={<Navigate to="/" />}  />
        </Route>
      </Routes>
      </BrowserRouter>
      <Outlet/>
      
      <a class="footerLink" href="https://github.com/garrettlarson-dev/widgets">View My Repository</a>
    </div>
  );
}
