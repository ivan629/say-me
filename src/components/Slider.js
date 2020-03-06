import React from 'react';

import SliderFactory from './SliderFactory';

import './Slider.scss'

function Slider ({ quality, color, defaultValue }) {
    const Slider = new SliderFactory(color).createSlider();

    return (
        <div className="slider-container">
            <h3>{quality}</h3>
            <Slider valueLabelDisplay="on"  defaultValue={defaultValue}   aria-label="ios slider" />
        </div>
    );
}
export default Slider;
