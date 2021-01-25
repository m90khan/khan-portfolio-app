import React from 'react';
import Nav from './components/Nav';
import GlobalStyle from './styles/GlobalStyles';
import { AnimatePresence } from 'framer-motion';
import { Switch, Route } from 'react-router-dom';
import {
  HomeScreen,
  WorkScreen,
  WorkDetails,
  ContactScreen,
  AboutScreen,
} from './screens';
import ProjectCard from './components/ProjectCard';

function App() {
  // for framer motion to animation based on the pathname /key

  return (
    <>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/work/:id' component={ProjectCard} />

        <Route path='/work' exact>
          <WorkScreen />
        </Route>
        <Route path='/work/:id'>
          <WorkDetails />
        </Route>
        <Route path='/about'>
          <AboutScreen />
        </Route>
        <Route path='/contact'>
          <ContactScreen />
        </Route>
      </Switch>
    </>
  );
}
export default App;
