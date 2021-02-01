import React, { useState, useEffect, useRef } from 'react';
import Nav from './components/Nav';
import GlobalStyle from './styles/GlobalStyles';
import { Switch, Route, useHistory } from 'react-router-dom';
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
import { plane } from './assets/images';
import CircleComplete from './components/CircleComplete';
import { motion } from 'framer-motion';
import { planeImage } from './styles/Animation';
import { useScroll } from './components/useScroll';
function App() {
  const [projects, setProjects] = useState(data());
  const history = useHistory();
  const [element, controls] = useScroll();
  const pathName = history.location.pathname;
  useEffect(() => {
    if (!projects) {
      return setProjects(data());
    }
  }, [projects]);
  return (
    <>
      <GlobalStyle />
      <ScrollTop />
      <CircleComplete />
      <Nav />
      <motion.div>
        <motion.img
          variants={planeImage}
          initial='hidden'
          animate='show'
          src={plane}
          className='planewrap'
          alt='planer'
        />
      </motion.div>

      <AnimateSharedLayout type='crossfade'>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route
              path='/'
              exact
              render={(props) => <HomeScreen {...props} projects={projects} />}
            />
            <Route path='/about' exact component={AboutScreen} />
            <Route
              path='/work'
              exact
              render={(props) => <WorkScreen {...props} projects={projects} />}
            />
            <Route path='/contact' exact component={ContactScreen} />
            <Route
              path='/work/:id'
              render={(props) => <WorkDetails {...props} projects={projects} />}
            />
          </Switch>
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  );
}
export default App;
