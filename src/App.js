import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CarInfo } from "./pages/CarInfor.js";  // Import CarInfo component
import Home from "./pages/Home.js";
import "./style.css";

function App() {
  return (
    <Router>
      {/* Menu điều hướng */}
      <nav className="home-button">
        <Link to="/Homepage">High-End</Link>
      </nav>

      {/* Định tuyến cho các trang */}
      <Routes>
        {/* Route cho trang Home */}
        <Route path="/Homepage" element={<Home />} />

        {/* Route mặc định (/) với Suspense và Canvas */}
        <Route
          path="/"
          element={
            <Suspense fallback={null}>
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

