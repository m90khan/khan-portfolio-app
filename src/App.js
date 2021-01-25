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
import ScrollTop from './components/ScrollTop';

function App() {
  // for framer motion to animation based on the pathname /key

  return (
    <>
      <GlobalStyle />
      <ScrollTop />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/work' component={WorkScreen} />
          <Route path='/work/:id' component={WorkDetails} />
          <Route path='/about' component={AboutScreen} />
          <Route path='/contact' component={ContactScreen} />
        </Switch>
      </AnimatePresence>
    </>
  );
}
export default App;
