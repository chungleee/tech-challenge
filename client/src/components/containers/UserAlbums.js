import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetUserAlbums } from "../../redux/actions/albumsActions";
import Loader from "../presentationals/Loader/Loader";

const UserAlbums = ({ match }) => {
  const { userId } = match.params;
  const dispatch = useDispatch();
  const { albums } = useSelector(state => {
    return state.albumsState;
  });

  useEffect(() => {
    dispatch(handleGetUserAlbums(userId));
  }, []);

  if (!albums) {
    return <Loader />;
  }

  return (
    <div>
      {albums.map(album => {
        return (
          <li key={album.id}>
            <h3>{album.title}</h3>
          </li>
        );
      })}
    </div>
  );
};

export default UserAlbums;
