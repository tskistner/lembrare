import React from 'react';
import { Button } from 'reactstrap';

export default class ButtonImage extends React.Component {

    getRandom() {
        const number = Math.floor((Math.random() * 5) + 1);
        return (number === this.props.idValueUp) ? this.getRandom() : number;
    }

    getRandomImage() {
        if (['1', '0.5', '+0.5', '-0.5', '--0.5'].includes(this.props.value)) {
            return this.props.idValueUp;
        }
        return this.getRandom();
    }

    getImage() {
        this.idImage = this.getRandomImage();
        return 'button-image div i' + this.idImage;
    }

    componentWillMount() {
        this.defaultImage = this.getImage();
    }

    changeIcon(element, classAdd) {
        element.classList.remove('i'.concat(this.idImage));
        element.classList.add('color');
        if (classAdd) {
            element.classList.add(classAdd);
        }
        this.props.updateQtElements();
    }

    onClickButton(id) {
        const element = document.getElementById(id);
        if (element.classList.contains('i'.concat(this.idImage))) {
            switch (this.props.value) {
                case '0.5':
                    this.changeIcon(element, 'mPositive');
                    break;
                case '+0.5':
                    this.changeIcon(element, 'mPositive2');
                    break;
                case '-0.5':
                    this.changeIcon(element, 'mNegative');
                    break;
                case '--0.5':
                    this.changeIcon(element, 'mNegative2');
                    break;
                case '1':
                    this.changeIcon(element);
                    break;
                default:
                    element.classList.add('incorrect-icon');
                    setTimeout(() => {
                        element.classList.remove('incorrect-icon');
                    }, 150);
                    break;
            }
        }
    }

    render() {
        const id = 'icon_' + this.props.idIconImage;
        return (
            <Button onClick={() => this.onClickButton(id)} className={this.defaultImage} id={id} />
        );
    }
}