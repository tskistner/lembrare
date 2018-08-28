import React from 'react';
import { Input, Label } from 'reactstrap';

export default class SelectField extends React.Component {
    render() {
        const options = [];
        for (let i = 0; i < this.props.options.length; i++) {
            options.push(<option key={i}>{this.props.options[i]}</option>)
        }

        return (
            <div className={'col-' + this.props.col}>
                <Label className='col-12'>{this.props.placeholder+':'}</Label>
                <Input type="select"  id={this.props.idInput} name={this.props.idInput} >
                    {options}
                </Input>
            </div>
        );
    }
}