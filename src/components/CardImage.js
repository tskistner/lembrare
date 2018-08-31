import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

export default class Categories extends React.Component {

    constructor(props) {
        super(props);
        this.onOutImage = this.onOutImage.bind(this);
        this.onOverImage = this.onOverImage.bind(this);
        this.onClickCard = this.onClickCard.bind(this);
    }

    onOverImage() {
        document.getElementById(this.props.id).classList.add('hover');
    }

    onOutImage() {
        document.getElementById(this.props.id).classList.remove('hover');
    }

    onClickCard() {
        alert('teste');
    }

    render() {
        return (
            <div className='col-4'>
                <Card>
                    <a>
                    <CardImg 
                        id={this.props.id}
                        className='card image'
                        onMouseOver={this.onOverImage}
                        onMouseOut={this.onOutImage}
                        onClick={this.onClickCard}
                        src={require('./../icons/'+this.props.image+'.jpg')} alt='short' />
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardText>{this.props.description}</CardText>
                    </CardBody>
                    </a>
                </Card>
            </div>
        );
    }
}