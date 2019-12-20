import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleGetUserAlbums } from "../../redux/actions/albumsActions";
import Loader from "../presentationals/Loader/Loader";

const UserAlbums = ({ match, location }) => {
  const { id, name } = location.state.user;
  let history = useHistory();
  const dispatch = useDispatch();
  const { albums } = useSelector(state => {
    return state.albumsState;
  });

  useEffect(() => {
    dispatch(handleGetUserAlbums(id));
  }, []);

  if (!albums) {
    return <Loader />;
  }

  return (
    <article className="pa3 pa5-ns">
      <button
        className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4"
        onClick={history.goBack}
      >
        Go Back
      </button>
      <h1 className="f4 bold center mw6">{`${name}'s Albums:`}</h1>
      <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
        {albums.map(album => {
          return (
            <Link
              key={album.id}
              to={{
                pathname: `${match.url}/album/${album.id}`,
                state: {
                  album
                }
              }}
            >
              <li className="ph3 pv3 bb b--light-silver">
                <h3>{album.title}</h3>
              </li>
            </Link>
          );
        })}
      </ul>
    </article>
  );
};

export default UserAlbums;
