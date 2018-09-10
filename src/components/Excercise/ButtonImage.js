import React from 'react';
import { Button } from 'reactstrap';

import { b1 } from './../../icons/excercises/button_1.svg';

export default class ButtonImage extends React.Component {

    constructor() {
        super();   
    }

    getRandom() {
        const number = Math.floor((Math.random() * 5) + 1);
        return (number == this.props.idIconImage) ? this.getRandom() : number;
    }

    getAleatoryImage() {
        if (this.props.value == 1) {
            return this.props.idIconImage;
        }
        return this.getRandom();
    }

    getImage() {
        switch (this.getAleatoryImage()) {
            case 1:
                return require('./../../icons/excercises/button_1.svg');
            case 2:
                return require('./../../icons/excercises/button_2.svg');
            case 3:
                return require('./../../icons/excercises/button_3.svg');
            case 4:
                return require('./../../icons/excercises/button_4.svg');
            case 5:
                return require('./../../icons/excercises/button_5.svg');
            default:
                return require('./../../icons/excercises/button_color.svg');
        }
    }

    componentWillMount() {
        this.defaultImage = this.getImage();
    }

    onClickButton() {
        document.getElementById('Imagelala').src = require('./../../icons/excercises/button_color.svg');
    }

    render() {
        const onClick = this.value == 1 ? this.onClickButton : null;
        return (
            <Button onClick={onClick}>
                <img
                    src={this.defaultImage}
                    alt='delete'
                    id='Imagelala' />
            </Button>
        );
    }
}