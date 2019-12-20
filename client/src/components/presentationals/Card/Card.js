import React from "react";

const Card = ({ id, name }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        textAlign: "center"
      }}
    >
      <img src={`https://robohash.org/${id}?size=150x150`} alt={name} />

      <div style={{ padding: "0.5rem 0" }}>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Card;
