import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home, Contact, Services, ServicesDetail, Team, ProjectDetail} from '../pages'
import { Header, Footer } from '../layout'

function App() {
  return (
      <Router>
        <Header />
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
