import React, { Component } from 'react';

// bootstrap and custom styles/scripts
import './App.css';

// routing
import { BrowserRouter as Router, 
  Route, 
  Switch, 
  Redirect 
} from "react-router-dom";

// pages
import MainPage from './pages/index.jsx';
import Register from './pages/register.jsx';
import Login from './pages/login.jsx';
import AboutPage from './pages/about.jsx';
import MatchesPage from './pages/matches';
import ContactPage from './pages/contact.jsx';
import ErrorPage from './pages/404.jsx';
import CheckAuth from './components/auth/auth';
import Profile from './pages/profile';
import Coaching from './pages/coaching';
// components
import Layout from './components/core/Layout';
import Header from './components/core/Header';
import Footer from './components/core/Footer';

// icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faPeopleCarry, faUsers, faComments, faBook } from '@fortawesome/free-solid-svg-icons'
library.add(faHome, faUsers, faComments, faBook, faPeopleCarry);

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Layout className="mt-1">
          <Router>
            <Switch>
              {/* Register */}
              <Route exact path="/register" component={Register} />
              {/* Login */}
              <Route exact path="/" component={Login} />
              {/* All other Routes bar Register and Login is wrapped around the Auth Component to check for token */}
              <CheckAuth>
                <Route exact path="/mainPage" component={MainPage} />
                {/* About */}
                <Route exact path="/about" component={AboutPage} />
                {/* Profile */}
                <Route exact path="/profile" component={Profile} />
                {/* Matches */}
                <Route exact path="/mymatches" component={MatchesPage} />
                {/* mentor/mentee */}
                <Route exact path="/coaching" component={Coaching} />
                {/* Contact */}
                <Route exact path="/contact" component={ContactPage} />
              </CheckAuth>
              {/* 404s */}
              <Route exact path="/404" component={ErrorPage} />
              <Redirect to="/404"/>
            </Switch>
          </Router>
        </Layout>
        <Footer/>
      </div>
    );
  }
}

export default App;
