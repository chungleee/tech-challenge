import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
          <Link
            to={{
              pathname: `/user/${user.id}`,
              state: {
                user
              }
            }}
            className="grow"
            style={{ flexShrink: "1", flexBasis: "30%", margin: "5px" }}
            key={user.id}
          >
            <Card id={user.id} name={user.name} />
          </Link>
        );
      })}
    </ul>
  );
};

export default Users;
