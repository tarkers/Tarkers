import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Container, Content, Footer, Button, Grid } from 'rsuite'
import { HomePage, ArticlePage, ChoiceNavPage, Header } from './index'
import { Router, Route, Switch } from "react-router-dom";
import './App.scss'
import style from './App.module.scss'
import 'rsuite/dist/styles/rsuite-default.css';
import { createBrowserHistory } from 'history';
import { useWindowDimensions } from '../Component/useWindowDimensions'
const App: React.FC = () => {
  const history = createBrowserHistory();
  // const test = async () => {
  //   const response = await fetch("/api")
  //   const data = await response.json()
  //   console.log(data)
  // }
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
