import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loader from "../presentationals/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { handleGetAlbumById } from "../../redux/actions/albumsActions";

const Album = ({ location }) => {
  const { album } = location.state;
  let history = useHistory();
  const dispatch = useDispatch();

  const { photos } = useSelector(state => {
    return state.albumsState;
  });

  useEffect(() => {
    dispatch(handleGetAlbumById(album.id));
  }, []);

  if (!photos) {
    return <Loader />;
  }
  return (
    <div>
      <button
        className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4"
        onClick={history.goBack}
      >
        Go Back
      </button>
      <h1>{album.title}</h1>
      {photos.map(photo => {
        return (
          <div key={photo.id}>
            <article className="fl w-50 w-25-l link overflow-hidden">
              <div
                role="img"
                aria-label={photo.title}
                className="grow aspect-ratio--4x6 "
                style={{
                  background: `url(${photo.url}) no-repeat center center`,
                  backgroundSize: "cover"
                }}
              ></div>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default Album;
