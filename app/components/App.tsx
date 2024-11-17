import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import AuthorsPage from './pages/AuthorsPage';
import ManageAuthorPage from './pages/ManageAuthorPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './widgets/Header';
import Footer from '../components/widgets/Footer';
import { JsonChordsTextContextProvider } from './widgets/JsonChordsText/JsonChordsTextContext';
import { PlayingContextProvider } from './widgets/PlayControls/PlayingContext';

const App = () => (
  <div>
    <Header />

    <div className={`container-fluid`}>
      <JsonChordsTextContextProvider>
        <PlayingContextProvider>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/app" component={MainPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/authors" component={AuthorsPage} />
                <Route path="/author/:id" component={ManageAuthorPage} />
                <Route path="/author" component={ManageAuthorPage} />
                <Route path="" component={NotFoundPage} />
            </Switch>
        </PlayingContextProvider>
      </JsonChordsTextContextProvider>
    </div>

    <Footer />
  </div>
);

export default App;
