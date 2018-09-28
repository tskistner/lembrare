import React from 'react';
import { Input, Label } from 'reactstrap';

export default class InputField extends React.Component {

    render() {
        return (
            <div className="form-group">
                {this.props.required}
                <Label>{this.props.placeholder + ':'}</Label>
                <Input type={this.props.type}
                    name={this.props.idInput}
                    id={this.props.idInput}
                    maxLength={this.props.maxlength}
                    required={this.props.required} 
                    ref={this.props.idInput} />
            </div>
        );
    }
}