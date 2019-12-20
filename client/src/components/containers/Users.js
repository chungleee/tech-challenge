import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../presentationals/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchUsers } from "../../redux/actions/usersActions";
import Card from "../presentationals/Card/Card";

const Users = () => {
  const [value, setValue] = useState("");

  const handleOnChange = event => {
    setValue(event.target.value);
  };

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
    <div className="flex flex-column">
      <input
        onChange={handleOnChange}
        placeholder="Search by name"
        className="ba b--silver center w-50 pa2"
        value={value}
        type="text"
        name="search"
      />
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
        {users
          .filter(user => {
            return user.name.toLowerCase().includes(value.toLocaleLowerCase());
          })
          .map(user => {
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
    </div>
  );
};

export default Users;
