import React from 'react';

export default class ButtonImage extends React.Component {

    getRandom() {
        const number = Math.floor((Math.random() * 5) + 1);
        return (number === this.props.idValueUp) ? this.getRandom() : number;
    }

    getAleatoryImage() {
        if (this.props.value === 1) {
            return this.props.idValueUp;
        }
        return this.getRandom();
    }

    getImage() {
        this.idImage = this.getAleatoryImage();
        return 'button-image div i'+this.idImage;
    }

    componentWillMount() {
        this.defaultImage = this.getImage();
    }

    onClickButton(id) {
        document.getElementById(id).classList.remove('i'+this.idImage);
        document.getElementById(id).classList.add('color');
        this.props.updateQtElements();
    }

    render() {
        const id = 'icon_' + this.props.idIconImage;
        const onClick = this.props.value === 1 ? () => this.onClickButton(id) : null;
        return (
            <button  onClick={onClick}>
                <div className={this.defaultImage}
                    alt={id}
                    id={id} />
            </button>
        );
    }
}