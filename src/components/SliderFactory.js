import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';



const DEFAULT_SLIDER_STYLES = {
    thumb: {
        height: 28,
        width: 28,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus,&:hover,&$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        fontSize: 20,
        left: 'calc(-50% + 8px)',
        top: -20,
        '& *': {
            background: 'transparent',
            color: '#000',
        },
    },
    track: {
        height: 12,
        borderRadius: 4,
    },
    rail: {
        height: 12,
        borderRadius: 4,
    }
};

class SliderFactory {
    constructor(color) {
        this.color = color;
    }

    getSliderStyles () {
        return { root: { color: this.color, height: 8 }, ...DEFAULT_SLIDER_STYLES };
    }

    createSlider() {
        const sliderStyles = this.getSliderStyles();

        return withStyles(sliderStyles)(Slider);
    }
}

export default SliderFactory;
