import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Login from './components/Utils/Forms/Login/Login';
import Signup from './components/Utils/Forms/Signup/Signup';
import Test from './components/Utils/Forms/Test/Test';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function NotFound() {
  return <div>404, Page not found :c</div>;
}

export default App;
