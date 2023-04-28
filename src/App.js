// we are not going to use id token we are  receiving from firebase because it need a seperate server (Backend )to verify the token
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
      </Routes>
    </Router>
  );
}

export default App;
