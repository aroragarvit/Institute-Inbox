// we are not going to use id token we are  receiving from firebase because it need a seperate server (Backend )to verify the token
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Available from "./pages/Available";
import ProtectedRoute from "./components/ProtectedRoute";

import "./style.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route
          path="/home/:id"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/available"
          element={
            <ProtectedRoute>
              <Available />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
