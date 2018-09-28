import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

//PAra buscar valor: document.querySelector('input[name="ie_sexo"]:checked')
export default class RadioField extends React.Component {
    render() {
        const options = this.props.options.map((o, i) => {
            return <FormGroup check key={i}>
                <Label check key={i}>
                    <Input type="radio" key={i} value={o.VALUE} name={this.props.idInput} id={this.props.idInput+'_'+o.VALUE} />
                    {' '}  {o.OPTION} 
                </Label>
            </FormGroup>;
        });

        return (
            <div className="form-group">
                {this.props.required}
                <Label>{this.props.placeholder + ':'}</Label>
                <FormGroup tag="fieldset" id={this.props.idInput} name={this.props.idInput} >
                    {options}
                </FormGroup>
            </div>
        );
    }
}