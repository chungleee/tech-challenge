import React, { useEffect } from "react";
import Loader from "../presentationals/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchUsers } from "../../redux/actions/usersActions";
import Card from "../presentationals/Card/Card";

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(state => {
    return state.usersState;
  });

  useEffect(() => {
    dispatch(handleFetchUsers());
  }, []);

  if (!users) {
    return <Loader />;
  }

  return (
    <ul
      style={{
        height: "100%",
        width: "90%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {users.map(user => {
        return (
          <li
            style={{ flexShrink: "1", flexBasis: "33%", margin: "5px" }}
            key={user.id}
          >
            <Card id={user.id} name={user.name} />
          </li>
        );
      })}
    </ul>
  );
};

export default Users;
