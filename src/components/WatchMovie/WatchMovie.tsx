import { useState } from 'react';
import './WatchMovie.css';

const WatchMovie = ({ movie }: { movie: any }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <div id="WatchMovie">
        <button className="trailer" onClick={() => setIsClicked(true)}>
          <i className="fa-solid fa-film"></i> &nbsp; TRAILER
        </button>
        <button className="watch-amazon">
          <a href="https://www.amazon.com/watch" target="_blank">
            <i className="fa-solid fa-circle-play"></i> &nbsp; Watch on
            amazon.com
          </a>
        </button>
        {isClicked && (
          <div className="float-yt">
            <div className="video">
              {/* <iframe
  
                // src="https://www.youtube.com/embed/-VLEPhfEN2M"
                src={movie.primaryImage.imageUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> */}
              <video poster={movie.primaryImage.imageUrl} controls></video>
              <button className="cross" onClick={() => setIsClicked(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="buy-website">
        <a href="">
          If you find this website useful, feel free to buy me a coffee{' '}
          <span style={{ textDecoration: 'underline', marginRight: '5px' }}>
            here
          </span>
          <i className="fa-solid fa-mug-hot"></i>
        </a>
      </div>
    </>
  );
};

export default WatchMovie;
