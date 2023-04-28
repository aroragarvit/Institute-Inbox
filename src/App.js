// we are not going to use id token we are  receiving from firebase because it need a seperate server (Backend )to verify the token

import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { auth, db } from "./config/firebase";

function App() {
  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;
