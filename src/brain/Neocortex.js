import React from 'react';
import Layer from './Layer.js'

function Neocortex(props) {
    const numLayers = props.numLayers;
    const layers = [];
    for (let i = 0; i < numLayers; i++) {
        layers.push(
            <Layer key={i} index={i} numNeurons="20"/>
        )
    }
    return <div className="neocortex">
        {layers}
    </div>
}

export default Neocortex;
