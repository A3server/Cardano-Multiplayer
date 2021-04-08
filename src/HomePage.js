//* usual stuff
import React from 'react';
import { Link } from 'react-router-dom';

//* styling the page
import './style/css/HomePage.css';
import Buttons from './components/Buttons'

const HomePage = () => {
  localStorage.clear();

  return (
    <div className="App">
        <div className="Background">
          <div className="btns">
              <Link to="/loginWallet">
                <Buttons 
                  name="Log in"
                  title="Connectstr buttonsHomePage"
                />
              </Link>
              <Link to="/play">
                <Buttons 
                    name="Play"
                    title="Playstr buttonsHomePage"
                  />
              </Link>
          </div>
        </div>
      </div>
  )
}

export default HomePage;