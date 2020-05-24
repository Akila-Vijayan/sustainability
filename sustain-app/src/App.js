import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Header from "./components/header";
import Home from "./components/home";
import SignUp from "./components/signup";
import CheckList from "./components/checklist";
import Score from './components/score';

class App extends Component {
constructor(props){
  super(props);

  this.updateScore=this.updateScore.bind(this);

  this.state={score:0};
}
updateScore = (score) => {
  this.setState({score});
}

  render(){
    const {score} =this.state;
    return (
      <Router>
        <div className="container">
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/creditScore" render={(props)=> <CheckList {...props} updateScore={this.updateScore}/>} />
          <Route path="/score" render={(props)=> <Score score={score}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;
