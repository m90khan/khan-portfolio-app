import React, { useState, useEffect } from 'react';
import Nav from './components/Nav/Nav';
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
import projectsData from './utils/projects';
import { plane } from './assets/images';
import CircleComplete from './components/CircleComplete';
import { motion } from 'framer-motion';
import { planeImage } from './styles/Animation';

function App() {
  const [projects, setProjects] = useState(projectsData());

  useEffect(() => {
    if (!projects) {
      setProjects(projectsData());
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
            <Route path='/' exact>
              <HomeScreen projects={projects} />
            </Route>
            <Route path='/about' exact>
              <AboutScreen />
            </Route>
            <Route path='/work' exact>
              <WorkScreen projects={projects} />
            </Route>
            <Route path='/contact' exact>
              <ContactScreen />
            </Route>
            <Route path='/work/:id' exact>
              <WorkDetails projects={projects} />
            </Route>
          </Switch>
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  );
}
export default App;
