import { Link } from 'react-router-dom';
import './Movie.css';
const Movie = ({ movie, genre }: { movie: any; genre: string }) => {
  // console.log('movie', movie);

  return (
    <Link to={`/movies/${movie.originalTitleText.text}`} state={{ ...movie, genre: genre }}>
      <div className="movie">
        <div className="movie-image">
          <img src={movie.primaryImage.imageUrl} alt={'movie image'} />
        </div>
        <div className="movie-title">
          {movie.originalTitleText.text}
        </div>
      </div>
    </Link>
  );
};

export default Movie;
