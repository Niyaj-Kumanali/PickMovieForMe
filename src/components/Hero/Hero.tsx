import { useState } from 'react'
import './Hero.css'
import MovieRecommend from '../MovieRecommend/MovieRecommend'

const Hero = () => {
  const [started, setStarted] = useState(false)
  return (
    <div id="Hero">
      {!started ? (
        <div className="hero-content">
          <h1>MOVIE RECOMMENDATION ENGINE</h1>
          <p>You can't decide between thousands of movies available for streaming?</p>
          <p>Answer 4 questions and let us pick the perfect movie for you!</p>
          <button className="hero-btn" onClick={() => setStarted(true)}>Start Now</button>
        </div>
      ) : (
        <MovieRecommend />
      )}
    </div>
  )
}

export default Hero