import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [inputValue, setInputValue] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const genres = ['Action', 'Comedy', 'Drama', 'Thriller', 'Adventure'];
  const actors = [
    'Tom Hanks',
    'Leonardo DiCaprio',
    'Brad Pitt',
    'Robert De Niro',
  ];

  const handleSearchBtn = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  useEffect(() => {
    if (isSearchVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchVisible]);

  const handleSearchKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      navigate('/all/page/1', { state: inputValue });
      setInputValue('');
      setIsSearchVisible(false);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value.toLowerCase());
  };

  return (
    <nav id="navbar">
      <div className="nav-main">
        <div className="nav-left">
          <Link to="/" onClick={() => setIsSearchVisible(false)}>
            <div className="nav-logo">
              <img
                src="https://pickamovieforme.b-cdn.net/wp-content/uploads/2020/09/logo_c.png"
                alt="Logo"
              />
            </div>
          </Link>
        </div>

        <div className="nav-right">
          <div className="nav-items">
            <div className="nav-link">
              <Link to="/">
                <span>Movie picker</span>
              </Link>
            </div>

            <div className="nav-link genres">
              <span>
                Top Genres <i className="ri-arrow-drop-down-line"></i>
              </span>
              <div className="dropdown-menu">
                {genres.map((genre, index) => (
                  <Link to={`/${genre.toLowerCase()}/page/1`} key={index}>
                    <span>{genre}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="nav-link actors">
              <span>
                Top Actors <i className="ri-arrow-drop-down-line"></i>
              </span>
              <div className="dropdown-menu">
                {actors.map((actor, index) => (
                  <Link to={`/${actor.toLowerCase()}/page/1`} key={index}>
                    <span>{actor}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="nav-link">
              <Link to="/blog">
                <span>Blog</span>
              </Link>
            </div>
          </div>

          <div className="nav-icons">
            <div className="search-container">
              <button className="icon-btn search-trigger" onClick={handleSearchBtn}>
                <i className="ri-search-line"></i>
              </button>
              {isSearchVisible && (
                <div className="search-box">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    placeholder="Search movies..."
                    onChange={handleSearchChange}
                    onKeyDown={handleSearchKeyDown}
                  />
                </div>
              )}
            </div>

            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="icon-btn">
                <i className="ri-facebook-circle-fill"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="icon-btn">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="icon-btn">
                <i className="ri-youtube-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
