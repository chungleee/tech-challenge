import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/presentationals/Header";
import Users from "./components/containers/Users";
import UserAlbums from "./components/containers/UserAlbums";
import Album from "./components/containers/Album";

function App() {
  return (
    <Router>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Header />
        <Route
          exact
          path="/"
          render={props => {
            return <Users {...props} />;
          }}
        />

        <Route
          exact
          path="/user/:userId"
          render={props => {
            return <UserAlbums {...props} />;
          }}
        />

        <Route
          path="/user/:userId/album/:albumId"
          render={props => {
            return <Album {...props} />;
          }}
        />
      </div>
    </Router>
  );
}

export default App;
