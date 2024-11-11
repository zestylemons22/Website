import Button from "./components/Button";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import hello from "./assets/hello.jpg";
import about from "./pages/about";
import home from "./pages/home";
import Navbar from "./components/Navbar";

import { Router, Routes, Route, BrowserRouter } from "react-router-dom";

interface AlertType {
  id: string;
  visible: boolean;
}

function App() {
  const [alerts, setAlerts] = useState<AlertType[]>([]);

  const addAlert = () => {
    setAlerts((prevAlerts) => [...prevAlerts, { id: uuidv4(), visible: true }]);
    console.log("bananas");
  };

  const doABackflip = () => {
    console.log("do a backflip please");
  };

  const removeAlert = (id: string) => {
    setAlerts((prevAlerts) =>
      prevAlerts.map((alert) =>
        alert.id === id ? { ...alert, visible: false } : alert
      )
    );
  };

  const visibleAlerts = alerts.filter((alert) => alert.visible);

  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/about" Component={about} />
          <Route index Component={home} />
        </Routes>
      </BrowserRouter>

      <Button color="primary" onClick={addAlert} style={{ margin: "10px" }}>
        My Button <br></br>
        <img src={hello}></img>
      </Button>
      {visibleAlerts.map((alert, index) => (
        <Alert
          key={alert.id}
          removal={() => removeAlert(alert.id)}
          index={index}
        />
      ))}
      <Button onClick={doABackflip}>Hello!</Button>
    </div>
  );
}

export default App;
