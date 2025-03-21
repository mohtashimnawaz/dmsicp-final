import React from "react";
import CreateSwitch from "./components/CreateSwitch";
import CheckInButton from "./components/CheckInButton";
import StatusDisplay from "./components/StatusDisplay";

export default function App() {
  return (
    <div>
      <h1>ICP Dead Man's Switch</h1>
      <CreateSwitch />
      <CheckInButton />
      <StatusDisplay />
    </div>
  );
}
