import React from "react";
import Header from "./components/presentationals/Header";
import Users from "./components/containers/Users";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Header />
      <Users />
    </div>
  );
}

export default App;
