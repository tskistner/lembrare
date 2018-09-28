import React from 'react';
import { Input, Label } from 'reactstrap';

export default class SelectField extends React.Component {
    render() {       

        const options = this.props.options.map((o, i) => {
            return <option key={i} value={o.VALUE}>{o.OPTION}</option>;
        });

        return (
            <div className="form-group">
                {this.props.required}
                <Label>{this.props.placeholder + ':'}</Label>
                <Input type="select" id={this.props.idInput} name={this.props.idInput} ref={this.props.idInput}>
                    {options}
                </Input>
            </div>
        );
    }
}