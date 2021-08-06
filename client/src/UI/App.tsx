import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Container,  Footer } from 'rsuite'
import { HomePage, ArticlePage, ChoiceNavPage, Header } from './index'
import { Router, Route, Switch } from "react-router-dom";
import style from './App.module.scss'
import 'rsuite/dist/styles/rsuite-default.css';
import { createBrowserHistory } from 'history';
const App: React.FC = () => {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Container>
          <Container>
            <Header />
          </Container>
          {/* <div>
            width: {width} ~ height: {height}
          </div> */}
          <Switch>
            <Route exact path="/choicNav" component={ChoiceNavPage} />
            <Route exact path="/dashboard" component={ArticlePage} />
            <Route exact path="/" component={HomePage} />
          </Switch>
          <Footer className={style.FooterStyle}>© 2021 Created - Designed by Tarkers</Footer>
      </Container>


    </Router>
  );
}

export default App;
