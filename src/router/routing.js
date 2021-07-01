import React, { Suspense, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { 
  Home, 
  Contact, 
  Services, 
  ServicesDetail, 
  Team, 
  ProjectDetail, 
  TeamDetail,
  Page,
  NotFound
} from '../pages'
import { Header, Footer, MenuOverload } from '../layout'
import {ScrollToTop} from '../helpers'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  const onOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
      <Router >
        <ScrollToTop />
        <MenuOverload onOpenMenu={onOpenMenu} isMenuOpen={isMenuOpen}/>
        <Header onOpenMenu={onOpenMenu}/>
        <Suspense fallback="loading">
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/equipo/:slug" component={TeamDetail} />
            <Route exact path="/equipo" component={Team} />
            <Route exact path="/servicios/:slug" component={ServicesDetail} />
            <Route exact path="/servicios" component={Services} />
            <Route exact path="/proyectos/:slug" component={ProjectDetail} />
            <Route exact path="/contacto" component={Contact} />
            <Route exact path="/pagina/:slug" component={Page} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
        <Footer />
      </Router>
  );
}

export default App;
