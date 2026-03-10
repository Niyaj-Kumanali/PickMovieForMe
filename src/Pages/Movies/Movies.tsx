import { useMemo, useState, useEffect } from 'react';
import Movie from '../../components/Movie/Movie';
import './Movies.css';
import { action } from '../../data/action';
import { thriller } from '../../data/thriller';
import { drama } from '../../data/drama';
import { adventure } from '../../data/adventure';
import { comedy } from '../../data/comedy';
import { Link, useLocation } from 'react-router-dom';

const ITEMS_PER_PAGE = 24;

const allMovies = [...action, ...drama, ...comedy, ...thriller, ...adventure];

function getMoviesByGenre(genre: string, actor: string) {
  const g = genre.toLowerCase();
  const a = actor.toLowerCase();

  if (g === 'action') return action;
  if (g === 'thriller') return thriller;
  if (g === 'comedy') return comedy;
  if (g === 'drama') return drama;
  if (g === 'adventure') return adventure;

  // Actor filtering: show all movies, filter by actor name keywords
  if (a === 'tom hanks') {
    return allMovies.filter((m) => {
      const title = m.title.originalTitleText.text.toLowerCase();
      return (
        title.includes('forrest') ||
        title.includes('cast away') ||
        title.includes('saving') ||
        title.includes('green mile') ||
        title.includes('da vinci') ||
        title.includes('captain phillips') ||
        title.includes('sully') ||
        title.includes('philadelphia') ||
        title.includes('toy story')
      );
    });
  }
  if (a === 'leonardo dicaprio') {
    return allMovies.filter((m) => {
      const title = m.title.originalTitleText.text.toLowerCase();
      return (
        title.includes('wolf') ||
        title.includes('inception') ||
        title.includes('revenant') ||
        title.includes('great gatsby') ||
        title.includes('titanic') ||
        title.includes('aviator') ||
        title.includes('shutter island') ||
        title.includes('departed')
      );
    });
  }
  if (a === 'brad pitt') {
    return allMovies.filter((m) => {
      const title = m.title.originalTitleText.text.toLowerCase();
      return (
        title.includes('fight club') ||
        title.includes('seven') ||
        title.includes('troy') ||
        title.includes('inglourious') ||
        title.includes('moneyball') ||
        title.includes('fury') ||
        title.includes('babylon') ||
        title.includes('bullet train') ||
        title.includes('once upon')
      );
    });
  }
  if (a === 'robert de niro') {
    return allMovies.filter((m) => {
      const title = m.title.originalTitleText.text.toLowerCase();
      return (
        title.includes('goodfellas') ||
        title.includes('godfather') ||
        title.includes('heat') ||
        title.includes('casino') ||
        title.includes('deer hunter') ||
        title.includes('joker') ||
        title.includes('family')
      );
    });
  }

  return allMovies;
}

const Movies = ({ genre, actor }: { genre: string; actor: string }) => {
  const location = useLocation();
  const searchValue: string | null = location.state;

  const baseMovies = useMemo(() => getMoviesByGenre(genre, actor), [genre, actor]);

  const displayMovies = useMemo(() => {
    if (searchValue && searchValue.trim()) {
      return baseMovies.filter((m) =>
        m.title.originalTitleText.text.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    return baseMovies;
  }, [baseMovies, searchValue]);

  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 when genre/actor/search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [genre, actor, searchValue]);

  const totalPages = Math.ceil(displayMovies.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const pageMovies = displayMovies.slice(start, end);

  const headingLabel =
    genre !== 'all' ? genre.charAt(0).toUpperCase() + genre.slice(1) : actor;

  return (
    <div id="Movies">
      <h1 className="movies-heading">
        {searchValue
          ? `Results for "${searchValue}"`
          : `Best ${headingLabel} Movies`}
      </h1>

      {displayMovies.length === 0 ? (
        <div className="no-results">
          <i className="ri-film-line"></i>
          <p>No movies found. Try a different search.</p>
        </div>
      ) : (
        <>
          <div className="movies-container">
            {pageMovies.map((movie, index) => (
              <Movie key={`${movie.title.id}-${index}`} movie={movie.title} genre={genre} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pageNavigation">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Link
                  key={page}
                  to={`/${genre !== 'all' ? genre.toLowerCase() : actor.toLowerCase()}/page/${page}`}
                >
                  <button
                    onClick={() => setCurrentPage(page)}
                    className={currentPage === page ? 'active-page' : ''}
                  >
                    {page}
                  </button>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Movies;
