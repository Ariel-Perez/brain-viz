import React from 'react';

class Sensor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interactive: props.interactive,
      numInputs: props.numInputs,
      value: 0,
      minValue: 0,
      maxValue: props.numInputs - 1
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleClick(index) {
    if (this.state.interactive) {
      this.setState({value: index})
    }
  }

  handleInput(e) {
    if (this.state.interactive) {
      this.setState({value: parseInt(e.target.value)});
    }
  }

  render() {
    const numInputs = this.state.numInputs;
    const inputs = [];
    for (let i = 0; i < numInputs; i++) {
      inputs.push(
        <div key={i}
             className={this.state.value === i ?
                        "sensor-input active" :
                        "sensor-input"}
             title={"Input " + i}
             onClick={this.handleClick.bind(this, i)}/>
      )
    }
    return (
      <div className={this.state.interactive ?
                      "sensor interactive" :
                      "sensor"}>
        <input type="number"
               value={this.state.value}
               min={this.state.minValue}
               max={this.state.maxValue}
               onChange={this.handleInput}/>
        <div className="sensor-representation">
          {inputs}
        </div>
      </div>
    )
  }
}

export default Sensor;
