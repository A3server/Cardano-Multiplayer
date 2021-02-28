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
        <div id="Background">  
          
          <div id="btns">
              <Link to="/loginWallet">
                <Buttons 
                  name="Log in"
                  title="LoginStr button"
                />
              </Link>
              <Link to="/play">
                <Buttons 
                    name="Play"
                    title="RegistarStr button"
                  />
              </Link>
          </div>
        </div>
      </div>
  )
}

export default HomePage;