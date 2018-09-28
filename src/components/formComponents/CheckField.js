import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

export default class CheckField extends React.Component {
    render() {
        return (
            <div>
                {this.props.required}
                <Label>{this.props.placeholder+':'}</Label>
                <FormGroup check  id={this.props.idInput} name={this.props.idInput} >
                    <Label check>
                        <Input type="checkbox" ref={this.props.idInput}  />{' '}
                        {this.props.desc} </Label>
                </FormGroup>
            </div>
        );
    }
}