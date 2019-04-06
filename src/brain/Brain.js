import React from 'react';
import Neocortex from './Neocortex.js'
import Sensor from './Sensor.js'

class Brain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      live: props.live,
      numInputs: props.numInputs,
      numLayers: props.numLayers
    };
  }

  render() {
    return (
      <div className="brain">
        <Sensor interactive={this.state.live}
                numInputs={this.state.numInputs}/>
        <Neocortex numLayers={this.state.numLayers}/>
      </div>
    )
  }
}

export default Brain;
