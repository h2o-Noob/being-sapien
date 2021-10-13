import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Starter from './components/Starter';
import Main from './components/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Srch from './components/Srch';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
            <Route path="/srch">
              <Srch/>
            </Route>
            <Route path="/">
              <Starter/>
              <Content/>
              <Main/>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
