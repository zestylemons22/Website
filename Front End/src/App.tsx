import Button from "./components/Button";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface AlertType {
  id: string;
  visible: boolean;
}

function App() {
  const [alerts, setAlerts] = useState<AlertType[]>([]);

  const addAlert = () => {
    setAlerts((prevAlerts) => [...prevAlerts, { id: uuidv4(), visible: true }]);
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
      <Button color="primary" onClick={addAlert} style={{ margin: "10px" }}>
        My Button
      </Button>
      {visibleAlerts.map((alert, index) => (
        <Alert
          key={alert.id}
          removal={() => removeAlert(alert.id)}
          index={index}
        />
      ))}
    </div>
  );
}

export default App;
