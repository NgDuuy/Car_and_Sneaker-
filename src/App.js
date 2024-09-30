import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CarInfo } from "./pages/CarInfor.js";  // Import CarInfo component
import Home from "./pages/Home.js";
import HeaderInfo from "./components/HeaderInfor.jsx";
import "./style.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Homepage" element={<Home/>} />
        <Route
          path="/"
          element={
            <Suspense fallback={null}>
              <HeaderInfo />
              <Canvas shadows>
                <CarInfo />
              </Canvas>
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
