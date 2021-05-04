import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './components/Loading/Loading';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
// import Login from './components/Login/Login';
// import Signin from './components/Signup/Sign';
import Foods from './components/Foods/Foods';
import Account from './components/Account/Account';
import { createContext, useState, lazy, Suspense } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Breakfast from './components/Breakfast/Breakfast';
import Lunch from './components/Lunch/Lunch';
import Dinner from './components/Dinner/Dinner';
// import Location from './components/Location/Location';
import Checkout from './components/Checkout/Checkout';

export const UserContext = createContext();

const Home = lazy(() => import('./components/Home/Home'));
const Signin = lazy(() => import('./components/Signup/Sign'));
const Login = lazy(() => import('./components/Login/Login'));
const Location = lazy(() => import('./components/Location/Location'));

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Suspense fallback={<Loading></Loading>}>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/signup'>
              <Signin></Signin>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/foods'>
              <Foods></Foods>
            </Route>
            <PrivateRoute path='/account'>
              <Account></Account>
            </PrivateRoute>
            <PrivateRoute path='/breakfast'>
              <Breakfast></Breakfast>
            </PrivateRoute>
            <PrivateRoute path='/lunch'>
              <Lunch></Lunch>
            </PrivateRoute>
            <PrivateRoute path='/dinner'>
              <Dinner></Dinner>
            </PrivateRoute>
            <Route path='/location'>
              <Location></Location>
            </Route>
            <Route path='/checkout'>
              <Checkout></Checkout>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
