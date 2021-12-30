import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import NotFound from './components/NotFound/NotFound';
import Booking from './components/Booking/Booking';
import MovieDetails from './components/Movie-Details/Movie-Details';

// setting up store and middleware section for redux for saga

import { Provider } from 'react-redux';
import reducer from './redux/reducers'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import rootSaga from './redux/sagas';
import { Route,  Redirect,  Switch, BrowserRouter as Router } from 'react-router-dom';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(

  <Provider store={store}>
  <Router>
    <div>
      <Switch>
      <Route exact path="/">
          <Redirect to="/movies"/>
      </Route>
       <Route  path="/movies" component={App} />
       <Route  path="/movieDetails" component={MovieDetails} />
       <Route  path="/booking" component={Booking} />
       <Route  component={NotFound}/>
       </Switch>
    </div>
    </Router>
    </Provider>,
  document.getElementById('root')
);

