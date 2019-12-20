import React from "react";

const Card = ({ id, name, username }) => {
  return (
    <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
        <img
          src={`https://robohash.org/${id}?size=150x150`}
          className="br-100 h4 w4 dib ba b--black-05 pa2"
          alt={name}
        />
        <h1 className="f3 mb2">{name}</h1>
        <h2 className="f5 fw4 gray mt0">{username}</h2>
      </div>
    </article>
  );
};

export default Card;
