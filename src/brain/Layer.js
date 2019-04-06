import React from 'react';

function Layer(props) {
  const index = props.index;
  const numNeurons = props.numNeurons;
  const neurons = [];
  for (let i = 0; i < numNeurons; i++) {
    neurons.push(
      <div key={i} className="neuron" title={"Layer " + index + ", Neuron " + i}/>
    )
  }
  return <div className="layer">
    {neurons}
  </div>
}

export default Layer;
