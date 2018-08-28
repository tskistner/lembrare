import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

export default class CheckField extends React.Component {
    render() {
        return (
            <div className={'input-group col-' + this.props.col}>
                <Label className='col-12'>{this.props.placeholder+':'}</Label>
                <FormGroup check  id={this.props.idInput} name={this.props.idInput} >
                    <Label check>
                        <Input type="checkbox" />{' '}
                        {this.props.desc} </Label>
                </FormGroup>
            </div>
        );
    }
}