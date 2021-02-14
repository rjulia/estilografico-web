import React, { Suspense, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home, Contact, Services, ServicesDetail, Team, ProjectDetail} from '../pages'
import { Header, Footer, MenuOverload } from '../layout'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  const onOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
      <Router>
        <MenuOverload onOpenMenu={onOpenMenu} isMenuOpen={isMenuOpen}/>
        <Header onOpenMenu={onOpenMenu}/>
        <Suspense fallback="loading">
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/equipo" component={Team} />
            <Route exact path="/servicios/:slug" component={ServicesDetail} />
            <Route exact path="/servicios" component={Services} />
            <Route exact path="/proyectos/:slug" component={ProjectDetail} />
            <Route exact path="/contacto" component={Contact} />
          </Switch>
        </Suspense>
        <Footer />
      </Router>
  );
}

export default App;
