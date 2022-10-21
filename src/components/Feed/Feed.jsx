import React from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";
import PropTypes from "prop-types";

function Feed({ user }) {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1, 2, 3]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }
    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}

      {/* lembrar  de colocar key */}
      {pages.map((page) => (
        <FeedPhotos
          user={user}
          page={page}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  );
}

Feed.defaultProps = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

Feed.prototype = {
  user: PropTypes.string.isRequired,
};

export default Feed;
