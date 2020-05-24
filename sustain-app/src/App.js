import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Header from "./components/header";
import Home from "./components/home";
import SignUp from "./components/signup";
import CheckList from "./components/checklist";
import Score from './components/score';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="container">
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/creditScore" component={CheckList} />
          <Route path="/score" component={Score} />
        </div>
      </Router>
    );
  }
}

export default App;
