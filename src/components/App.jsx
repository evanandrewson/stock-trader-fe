import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { getSessionId, getSessionLoading } from '../selectors/sessionSelectors';
import { sessionVerify } from '../actions/sessionActions';
import Signup from '../containers/SignUp';
import LogIn from '../containers/LogIn';
import SignOut from '../containers/SignOut';
import store from '../store';
// import Home from '../containers/Home';
import OrderForm from './form/OrderForm';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={OrderForm}/>
          <Route path="/login" component={LogIn}/>
          <Route path="/signup" component={Signup}/>
          <PrivateRoute path="/signout" component={SignOut}/>

        </Switch>
      </Router>
    </Provider>
  );
}

const PrivateRoute = ({ ...rest }) => {
  const sessionId = useSelector(getSessionId);
  const loading = useSelector(getSessionLoading);
  const dispatch = useDispatch();
  
  useEffect(()=> {
    if(!sessionId) {
      dispatch(sessionVerify())
    }
  }, [sessionId]);
  
  if(loading) return <h1>Loading...</h1>;

  if(!loading && !sessionId) return <Redirect to="/login"/>;

  return <Route {...rest} />;
}; 

