import React from 'react';
import { InputField, LabelField, SelectField, TAreaField, FTextField, RadioField,
    CheckField, DateField } from "./formComponents/";
import { FormGroup, Form } from 'reactstrap';


export default class FormContainer extends React.Component {
    render() {
        const fieldsPanel = [];
        if (this.props.fields) {
            for (let i = 0; i < this.props.fields.length; i++) {
                switch (this.props.fields[i].type) {
                    case 'text':
                    case 'password':
                    case 'file':
                    case 'number':
                        fieldsPanel.push(<InputField key={i}
                            type={this.props.fields[i].type}
                            idInput={this.props.fields[i].idInput}
                            placeholder={this.props.fields[i].placeholder}
                            col={this.props.fields[i].col}
                            addon={this.props.fields[i].addon}
                            maxlength={this.props.fields[i].maxlength}
                            required={this.props.fields[i].required}
                            icon={this.props.fields[i].icon} />);
                        break;
                    case 'label':
                        fieldsPanel.push(<LabelField key={i}
                            idInput={this.props.fields[i].idInput}
                            label={this.props.fields[i].label}
                            col={this.props.fields[i].col}
                            placeholder={this.props.fields[i].placeholder} />)
                        break;
                    case 'select':
                        fieldsPanel.push(<SelectField key={i}
                            idInput={this.props.fields[i].idInput}
                            options={this.props.fields[i].options}
                            placeholder={this.props.fields[i].placeholder} />);
                        break;
                    case 'textarea':
                        fieldsPanel.push(<TAreaField key={i}
                            idInput={this.props.fields[i].idInput}
                            col={this.props.fields[i].col}
                            maxlength={this.props.fields[i].maxlength}
                            rows={this.props.fields[i].rows} 
                            placeholder={this.props.fields[i].placeholder}/>)
                        break;
                    case 'formtext': 
                        fieldsPanel.push(<FTextField key={i}
                            idInput={this.props.fields[i].idInput}
                            col={this.props.fields[i].col}
                            text={this.props.fields[i].text} 
                            placeholder={this.props.fields[i].placeholder}/>)
                        break;
                    case 'radio': 
                        fieldsPanel.push(<RadioField key={i}
                            idInput={this.props.fields[i].idInput}
                            col={this.props.fields[i].col}
                            options={this.props.fields[i].options} 
                            values={this.props.fields[i].values}
                            placeholder={this.props.fields[i].placeholder} />);
                        break;
                    case 'check': 
                        fieldsPanel.push(<CheckField key={i}
                            idInput={this.props.fields[i].idInput}
                            col={this.props.fields[i].col}
                            desc={this.props.fields[i].desc}
                            placeholder={this.props.fields[i].placeholder} />);
                        break;
                    case 'date':
                        fieldsPanel.push(<DateField key={i}
                            idInput={this.props.fields[i].idInput}
                            col={this.props.fields[i].col}
                            placeholder={this.props.fields[i].placeholder} />);
                        break;
                    default:
                    break;
                }
            }
        }
        return (
            <Form>
                {React.createElement(FormGroup, { className: 'input-group' }, fieldsPanel)}
            </Form>
        );
    }
}