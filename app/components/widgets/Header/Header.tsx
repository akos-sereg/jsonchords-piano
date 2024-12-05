import * as React from 'react';
import { Link } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';
import Favicon from './images/favicon.ico';
import pianoImage from '../../../images/piano.png';

const Header = () => (
    <BrowserView>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
              <Link to="app" className="navbar-brand">
                <img alt="Favicon" src={pianoImage} height="24" />
              </Link>
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/songs">Songs</Link>
                </li>
                <li>
                  <Link to="/app">Editor</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
          </nav>
    </BrowserView>
);

export default Header;
