import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export default class RadioField extends React.Component {
    render() {

        const options = [];
        for (let i = 0; i < this.props.options.length; i++) {
            options.push(
                <FormGroup check key={i}>
                    <Label check key={i}>
                        <Input type="radio" key={i}
                            id={this.props.idInput}
                            name={this.props.idInput} 
                            value={this.props.values[i]} />{' '}
                        {this.props.options[i]} </Label>
                </FormGroup>
            );
        }

        return (
            <div className={'input-group col-' + this.props.col}>
                <Label className='col-12'>{this.props.placeholder+':'}</Label>
                <FormGroup tag="fieldset"  id={this.props.idInput} name={this.props.idInput} >
                    {options}
                </FormGroup>
            </div>
        );
    }
}