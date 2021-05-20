import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Card from "./component/card/card";
function App() {
  // useEffect(() => {
  //   const result: any = useSelector((state) => state, shallowEqual);
  // }, []);

  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
