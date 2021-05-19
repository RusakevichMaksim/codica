import React, { useEffect } from "react";
import "./App.css";
import { weatherAPI } from "./api/openweather";

function App() {
  useEffect(() => {
    // weatherAPI.getCity("London");
  }, []);

  return (
    <div className="App">
      <div className="card">
        <div>Sity Name</div>
        <div>Temperature Value</div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
