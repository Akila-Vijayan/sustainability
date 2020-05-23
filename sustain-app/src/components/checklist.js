import React, {Component} from 'react';

export default class CheckList extends Component {
  render () {
    return (
      <div>
        <form>
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
            <input type="button" value="Credit Score" />
          </div>
        </form>
      </div>
    );
  }
}
