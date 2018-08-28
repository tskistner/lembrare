import React from 'react';
import { Label } from 'reactstrap';

export default class LabelField extends React.Component {
    render() {
        return (
            <div className={'col-' + this.props.col}>
                <Label id={this.props.idInput} name={this.props.idInput} >{this.props.label}</Label>
            </div>
        );
    }
}