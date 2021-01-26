import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import GlobalStyle from './styles/GlobalStyles';
import { Switch, Route } from 'react-router-dom';
import {
  HomeScreen,
  WorkScreen,
  WorkDetails,
  ContactScreen,
  AboutScreen,
} from './screens';
import ScrollTop from './components/ScrollTop';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import data from './utils/data';

function App() {
  const [projects, setProjects] = useState(data());

  useEffect(() => {
    if (!projects) {
      return setProjects(data());
    }
  }, [projects]);
  return (
    <>
      <GlobalStyle />
      <ScrollTop />
      <Nav />
      <AnimateSharedLayout type='crossfade'>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route
              path='/'
              exact
              render={(props) => <HomeScreen {...props} projects={projects} />}
            />
            <Route
              path='/work/:id'
              render={(props) => <WorkDetails {...props} projects={projects} />}
            />
            <Route path='/work' exact component={WorkScreen} />
            <Route path='/about' component={AboutScreen} />
            <Route path='/contact' component={ContactScreen} />
          </Switch>
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  );
}
export default App;
