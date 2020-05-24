import React, {Component} from 'react';

export default class CheckList extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onSubmit (e) {
    e.preventDefault();
    this.props.history.push('/score');
  }
  render () {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Do you have Solar Panels or Solar Water Heater at home?</label>
            <input type="radio" value="Yes"/> Yes
            <input type="radio" value="No"/> No
          </div>
          <div>
            <label>Do you have Grey Water system at home?</label>
            <input type="radio" value="Yes"/> Yes
            <input type="radio" value="No"/> No
          </div>
          <div>
            <label>Do you have Cooling roof at home?</label>
            <input type="radio" value="Yes"/> Yes
            <input type="radio" value="No"/> No
          </div>
          <div>
            <label>Do you have Energy star rated Kitchen appliances at home?</label>
            <input type="radio" value="Yes"/> Yes
            <input type="radio" value="No"/> No
          </div>
          <div>
            <label>Do you have Natural shading at home?</label>
            <input type="radio" value="Yes"/> Yes
            <input type="radio" value="No"/> No
          </div>
          <div>
            <input type="submit" value="Credit Score" />
          </div>
        </form>
      </div>
    );
  }
}
