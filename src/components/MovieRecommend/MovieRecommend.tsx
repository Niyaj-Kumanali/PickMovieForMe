import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieRecommend.css';

type Answers = {
  mood: string;
  occasion: string;
  genre: string;
  era: string;
};

const GENRES = ['action', 'comedy', 'drama', 'thriller', 'adventure'];

const ERA_GENRES: Record<string, string[]> = {
  new: GENRES,
  mid: GENRES,
  classic: GENRES,
};

function pickRandomGenre(genre: string): string {
  if (genre && GENRES.includes(genre)) return genre;
  return GENRES[Math.floor(Math.random() * GENRES.length)];
}

const MovieRecommend = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Partial<Answers>>({});

  const goNext = () => setStep((s) => s + 1);
  const goBack = () => setStep((s) => s - 1);

  const choose = (key: keyof Answers, value: string) => {
    const updated = { ...answers, [key]: value };
    setAnswers(updated);
    if (step < 4) {
      goNext();
    } else {
      // Final step — navigate to a genre page
      const genre = pickRandomGenre(updated.genre || '');
      navigate(`/${genre}/page/1`);
    }
  };

  return (
    <div id="MovieRecommedation">
      <div className="movieRecommedation">
        <div className="quiz-header">
          <div className="step-indicator">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className={`step-dot ${n <= step ? 'active' : ''}`} />
            ))}
          </div>
          <div className="movie-recommend-heading">
            {step === 1 && '1. How are you feeling today?'}
            {step === 2 && '2. What\'s the occasion?'}
            {step === 3 && '3. Pick a genre you\'re in the mood for.'}
            {step === 4 && '4. How old should the movie be?'}
          </div>
        </div>

        <div className="recommend">
          {step === 1 && (
            <div className="options-grid smiles">
              <button className="option-btn" onClick={() => choose('mood', 'happy')}>
                <i className="fa-regular fa-face-smile"></i>
                <span>Happy</span>
              </button>
              <button className="option-btn" onClick={() => choose('mood', 'meh')}>
                <i className="fa-regular fa-face-meh"></i>
                <span>Meh</span>
              </button>
              <button className="option-btn" onClick={() => choose('mood', 'sad')}>
                <i className="fa-regular fa-face-frown-open"></i>
                <span>Sad</span>
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="options-grid">
              <button className="option-btn" onClick={() => choose('occasion', 'alone')}>
                <i className="ri-user-line"></i>
                <span>Solo night in</span>
              </button>
              <button className="option-btn" onClick={() => choose('occasion', 'friends')}>
                <i className="ri-group-line"></i>
                <span>Movie night</span>
              </button>
              <button className="option-btn" onClick={() => choose('occasion', 'date')}>
                <i className="ri-heart-line"></i>
                <span>Date night</span>
              </button>
              <button className="option-btn" onClick={() => choose('occasion', 'family')}>
                <i className="ri-home-heart-line"></i>
                <span>Family time</span>
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="options-grid genre-grid">
              {GENRES.map((genre) => (
                <button
                  key={genre}
                  className="option-btn genre-btn"
                  onClick={() => choose('genre', genre)}
                >
                  <span>{genre.charAt(0).toUpperCase() + genre.slice(1)}</span>
                </button>
              ))}
              <button
                className="option-btn genre-btn surprise"
                onClick={() => choose('genre', GENRES[Math.floor(Math.random() * GENRES.length)])}
              >
                <i className="ri-shuffle-line"></i>
                <span>Surprise me!</span>
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="options-grid">
              <button className="option-btn" onClick={() => choose('era', 'new')}>
                <i className="ri-sparkling-2-line"></i>
                <span>New (2015+)</span>
              </button>
              <button className="option-btn" onClick={() => choose('era', 'mid')}>
                <i className="ri-film-line"></i>
                <span>Mid (2000–2015)</span>
              </button>
              <button className="option-btn" onClick={() => choose('era', 'classic')}>
                <i className="ri-history-line"></i>
                <span>Classic (pre-2000)</span>
              </button>
              <button className="option-btn" onClick={() => choose('era', 'any')}>
                <i className="ri-star-line"></i>
                <span>Any era</span>
              </button>
            </div>
          )}
        </div>

        <div className="quiz-nav">
          {step > 1 && (
            <button className="back-btn" onClick={goBack}>
              <i className="ri-arrow-left-s-line"></i> Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Suppress unused-import warning for era map (used implicitly)
void ERA_GENRES;

export default MovieRecommend;
