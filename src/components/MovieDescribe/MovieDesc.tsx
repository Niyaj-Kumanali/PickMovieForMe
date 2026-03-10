import { useState } from 'react';
import './MovieDesc.css';

type Tab = 'desc' | 'details' | 'actors';

const MovieDesc = ({ movie }: { movie: any }) => {
  const [activeTab, setActiveTab] = useState<Tab>('desc');

  return (
    <div className="movie-description">
      <div
        className="movie-desc-image"
        style={{ backgroundImage: `url(${movie.primaryImage.imageUrl})` }}
      >
        <div className="movie-desc-img-top">
          <h2>{movie.originalTitleText.text}</h2>
          <span className="movie-year-badge">{movie.releaseYear.year}</span>
        </div>

        <div className="movie-desc-img-bottom">
          <div className="movie-desc-genres">
            <span className="genre-badge">{movie.genre || 'Movie'}</span>
          </div>
          <div className="movie-details">
            <p className="movie-duration">
              <i className="ri-time-line"></i> 1h 49min &nbsp;|&nbsp;
              <i className="ri-shield-star-line"></i> PG &nbsp;|&nbsp;
              {movie.releaseYear.year}
            </p>
            <p className="click-to-see">Click an icon to see more</p>
            <div className="details-nav">
              <button
                className={activeTab === 'desc' ? 'tab-btn active' : 'tab-btn'}
                onClick={() => setActiveTab('desc')}
                title="Description"
              >
                <i className="fa-solid fa-quote-right"></i>
                {activeTab === 'desc' && <i className="ri-arrow-up-s-fill indicator"></i>}
              </button>
              <button
                className={activeTab === 'details' ? 'tab-btn active' : 'tab-btn'}
                onClick={() => setActiveTab('details')}
                title="Details"
              >
                <i className="fa-regular fa-file-lines"></i>
                {activeTab === 'details' && <i className="ri-arrow-up-s-fill indicator"></i>}
              </button>
              <button
                className={activeTab === 'actors' ? 'tab-btn active' : 'tab-btn'}
                onClick={() => setActiveTab('actors')}
                title="Cast"
              >
                <i className="fa-solid fa-user-group"></i>
                {activeTab === 'actors' && <i className="ri-arrow-up-s-fill indicator"></i>}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-desc-content">
        {activeTab === 'desc' && (
          <p className="desc-text">
            <i className="fa-solid fa-quote-right quote-icon"></i>
            An award-winning cynical journalist, Lloyd Vogel, begrudgingly
            accepts an assignment to write an Esquire profile piece on the
            beloved television icon Fred Rogers. After his encounter with Rogers,
            Vogel's perspective on life is transformed.
          </p>
        )}

        {activeTab === 'details' && (
          <div className="movie-info">
            <div className="info-row">
              <span className="info-label">Rating</span>
              <span className="info-value">
                ⭐ {movie.ratingsSummary?.aggregateRating ?? 'N/A'} / 10
                <small> ({movie.ratingsSummary?.voteCount?.toLocaleString() ?? '–'} votes)</small>
              </span>
            </div>
            <div className="info-row">
              <span className="info-label">Release Year</span>
              <span className="info-value">{movie.releaseYear.year}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Duration</span>
              <span className="info-value">1h 49min</span>
            </div>
            <div className="info-row">
              <span className="info-label">Certification</span>
              <span className="info-value">PG</span>
            </div>
            <div className="info-row">
              <span className="info-label">Country</span>
              <span className="info-value">US</span>
            </div>
          </div>
        )}

        {activeTab === 'actors' && (
          <p className="desc-text cast-placeholder">
            <i className="ri-user-smile-line"></i>
            Cast information is not available in this dataset. Browse by genre
            for more movies.
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieDesc;
