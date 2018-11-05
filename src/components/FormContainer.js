import React from 'react';
import {
    InputField, SelectField, TAreaField, RadioField, CheckField
} from "./";
import { FormGroup, Label } from 'reactstrap';


export default class FormContainer extends React.Component {
    render() {
        const infRequired = <Label className='input required'>*   </Label>;

        const fieldsPanel = this.props.fields.map((f, i) => {
            switch (f.type) {
                case 'select':
                    return <SelectField key={i}
                        idInput={f.idInput}
                        options={f.options}
                        placeholder={f.placeholder}
                        required={f.required ? infRequired : null} />
                case 'textarea':
                    return <TAreaField key={i}
                        idInput={f.idInput}
                        maxlength={f.maxlength}
                        rows={f.rows}
                        placeholder={f.placeholder}
                        required={f.required ? infRequired : null} />;
                case 'radio':
                    return <RadioField key={i}
                        idInput={f.idInput}
                        options={f.options}
                        placeholder={f.placeholder}
                        required={f.required ? infRequired : null} />
                case 'check':
                    return <CheckField key={i}
                        idInput={f.idInput}
                        desc={f.desc}
                        placeholder={f.placeholder}
                        required={f.required ? infRequired : null}
                        ieChecked={f.ieChecked} />;
                default:
                    return <InputField key={i}
                        type={f.type}
                        idInput={f.idInput}
                        placeholder={f.placeholder}
                        maxlength={f.maxlength}
                        required={f.required ? infRequired : null}
                        mask={f.mask} />;
            }

        });
        return (
            <form>
                {React.createElement(FormGroup, null, fieldsPanel)}
            </form>
        );
    }
}