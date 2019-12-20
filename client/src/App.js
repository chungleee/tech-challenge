import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchUsers } from "./redux/actions/usersActions";
import Header from "./components/presentationals/Header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFetchUsers());
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
