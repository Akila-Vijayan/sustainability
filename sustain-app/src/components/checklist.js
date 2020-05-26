import React, {Component} from 'react';
import Bg1 from './images/Template.jpg';

export default class CheckList extends Component {
  constructor(props){
    super(props);

    this.onChangeQ1 = this.onChangeQ1.bind(this);
    this.onChangeQ2 = this.onChangeQ2.bind(this);
    this.onChangeQ3 = this.onChangeQ3.bind(this);
    this.onChangeQ4 = this.onChangeQ4.bind(this);
    this.onChangeQ5 = this.onChangeQ5.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Q1 : 0,
      Q2 : 0,
      Q3 : 0,
      Q4 : 0,
      Q5 : 0,
      creditScore : 0
    }
  }

  onChangeQ1(e) {
    this.setState({
        Q1: e.target.value
    });
  }

  onChangeQ2(e) {
    this.setState({
        Q2: e.target.value
    });
  }

  onChangeQ3(e) {
    this.setState({
        Q3: e.target.value
    });
  }

  onChangeQ4(e) {
    this.setState({
        Q4: e.target.value
    });
  }

  onChangeQ5(e) {
    this.setState({
        Q5: e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();

    console.log('Checklist Submitted');
    console.log(`${this.state.Q1}`);
    console.log(`${this.state.Q2}`);
    console.log(`${this.state.Q3}`);
    console.log(`${this.state.Q4}`);
    console.log(`${this.state.Q5}`);
    console.log(`${this.state.creditScore}`);
    console.log(`${this.props.score}`);

    this.setState({
      creditScore : Number(this.state.Q1) + Number(this.state.Q2) + Number(this.state.Q3)
              + Number(this.state.Q4) + Number(this.state.Q5)
    });
    
    this.componentDidUpdate= (prevProps, prevState) => {
      console.log(`${this.state.creditScore}`);
  
      this.props.updateScore(this.state.creditScore);
      this.props.history.push('/score');
      };
  }

  render () {
    const style = {
      color: "Black",
      padding: "10px",
      fontFamily: "Calibri (Body)",
      fontSize:"20px"
    };
    return (
      <div style={{backgroundImage: `url(${Bg1})` }}>
        <br/>
        <form onSubmit={this.onSubmit}>

          <div className="form-group">
    <h4 style={style} ><label></label>{" "}<label className="form-check-label"> Do you have Solar Panels or Solar Water Heater at home?  </label>{" "}<label></label>{" "}
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" id="Q1Yes" name="Q1" value="20" checked={this.state.Q1==='20'} onChange={this.onChangeQ1}/>
              <label className="form-check-label"> Yes </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio"  id="Q1No" name="Q1" value="0" checked={this.state.Q1==='0'} onChange={this.onChangeQ1}/>
              <label className="form-check-label"> No </label>
            </div></h4>
          </div>


          <div className="form-group">
          <h4 style={style} ><label></label>{" "}<label className="form-check-label">Do you have Grey Water system at home?</label>{" "}<label></label>{" "}
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio"  id="Q2Yes" name="Q2" value="20" checked={this.state.Q2==='20'} onChange={this.onChangeQ2}/>
              <label className="form-check-label"> Yes </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio"  id="Q2No" name="Q2" value="0" checked={this.state.Q2==='0'} onChange={this.onChangeQ2}/>
              <label className="form-check-label"> No </label>
            </div></h4>
          </div>

          <div className="form-group">
          <h4 style={style} ><label></label>{" "}<label className="form-check-label">Do you have Cooling roof at home?</label>{" "}<label></label>{" "}
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio"  id="Q3Yes" name="Q3" value="20" checked={this.state.Q3==='20'} onChange={this.onChangeQ3}/>
              <label className="form-check-label"> Yes </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" id="Q3No" name="Q3" value="0" checked={this.state.Q3==='0'} onChange={this.onChangeQ3}/>
              <label className="form-check-label"> No </label>
            </div></h4>
          </div>

          <div className="form-group">
          <h4 style={style} ><label></label>{" "}<label className="form-check-label">Do you have Energy star rated Kitchen appliances at home?</label>{" "}<label></label>{" "}
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" id="Q4Yes" name="Q4" value="20" checked={this.state.Q4==='20'} onChange={this.onChangeQ4}/>
              <label className="form-check-label"> Yes </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" id="Q4No" name="Q4" value="0" checked={this.state.Q4==='0'} onChange={this.onChangeQ4}/>
              <label className="form-check-label"> No </label>
            </div></h4>
          </div>

          <div className="form-group">
           <h4 style={style} ><label></label>{" "}<label className="form-check-label">Do you have Natural shading at home?</label>{" "}<label></label>{" "}
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" id="Q5Yes" name="Q5" value="20" checked={this.state.Q5==='20'} onChange={this.onChangeQ5}/>
              <label className="form-check-label"> Yes </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" id="Q5No" name="Q5" value="0" checked={this.state.Q5==='0'} onChange={this.onChangeQ5}/>
              <label className="form-check-label"> No </label>
            </div></h4>
          </div>
          <br/>
          <div className="form-group" align="center">
            <input className="btn btn-success" type="submit" value="Sustainability Score"  />
          </div>
        </form>
      </div>
    );
  }
}
