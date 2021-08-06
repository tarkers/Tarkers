import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Container, Content, Footer, Button, Grid } from 'rsuite'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from '../reduxFile/index'
import { HomePage,  ArticlePage, ChoiceNavPage, Header } from './index'
import { Router, Route, Switch } from "react-router-dom";
import style from './App.module.scss'
import 'rsuite/dist/styles/rsuite-default.css';
import { createBrowserHistory } from 'history';
import { useWindowDimensions } from '../Component/useWindowDimensions'
const App: React.FC = () => {
  const history = createBrowserHistory();
  const { height, width } = useWindowDimensions();
  const state = useSelector((state: State) => state.user)
  const dispatch = useDispatch();
  const AC = bindActionCreators(actionCreators, dispatch)
  useEffect(() => {
    console.log(state)
    console.log(AC)
  }, [])
  // const test = async () => {
  //   const response = await fetch("/api")
  //   const data = await response.json()
  //   console.log(data)
  // }
  return (
    <Router history={history}>
      <Switch>
        <Container>
          <Container>
            <Container>
              <Header />
            </Container>
            {/* <div>
            width: {width} ~ height: {height}
          </div> */}
            <Route exact path="/" component={HomePage} />
            <Route path="/dashboard" component={ArticlePage} />
            <Route path="/choicNav" component={ChoiceNavPage} />
            <Grid fluid>
              <Footer className={style.FooterStyle}>© 2021 Create <br />Designed by Tarkers</Footer>
            </Grid>
          </Container>
        </Container>

      </Switch>
    </Router>
  );
}

export default App;
