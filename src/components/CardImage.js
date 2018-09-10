import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';

export default class Categories extends React.Component {

    constructor(props) {
        super(props);
        this.onOutImage = this.onOutImage.bind(this);
        this.onOverImage = this.onOverImage.bind(this);
    }

    onOverImage() {
        document.getElementById(this.props.id).classList.add('hover');
    }

    onOutImage() {
        document.getElementById(this.props.id).classList.remove('hover');
    }

    render() {
        return (
            <div>
                <Card 
                className={'card image '+this.props.bgColor} 
                id={this.props.id}
                onMouseOver={this.onOverImage}
                        onMouseOut={this.onOutImage}
                        onClick={() => this.props.handleClick(this.props.id)}>
                    {/*<CardImg 
                        onMouseOver={this.onOverImage}
                        onMouseOut={this.onOutImage}
                        onClick={this.props.handleClick}
                        //src={require('./../icons/'+this.props.image+'.jpg')} alt='short' 
                        />*/}
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardText>{this.props.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}