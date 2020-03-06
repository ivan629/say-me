import { map } from 'lodash';
import React from 'react';
import Button from '@material-ui/core/Button';

import { SLIDERS_LIST } from '../common/constants';

import './RootContainer.scss'

import Slider from './Slider';

function RootContainer() {
    return (
        <div className="root-container">
            {map(SLIDERS_LIST, sliderData => <Slider {...sliderData} key={sliderData.id} />)}
            <Button variant="outlined" color="primary" className="submitButton">Відправити</Button>
        </div>
    );
}

export default RootContainer;
