import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

//PAra buscar valor: document.querySelector('input[name="ie_sexo"]:checked')
export default class RadioPainted extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.ids = [];
    }

    isChecked(event) {
        return document.getElementById(event.currentTarget.id).checked;
    }

    onClick(event) {
        document.getElementById(event.currentTarget.children[0].children[0].id).click();
    }

    onChange(event) {
        //Retirar classList das demais opções
        if (this.ids) {
            this.ids.map(i => {
                document.getElementById(i).classList.remove('hover');
                return null;
            });
        }
        if (this.isChecked(event)) {
            document.getElementById(event.currentTarget.parentElement.parentElement.id).classList.add('hover');
        }
    }

    render() {
        let iColor = 0;
        const colors = ['purple', 'blueviolet', 'orchid'];
        const options = this.props.options.map((o, i) => {
            const classColor = 'default '.concat(colors[iColor]);
            iColor = iColor === 3 ? 0 : iColor + 1;

            const idOption = 'radio_opt_'.concat(this.props.idInput).concat(i);
            this.ids.push(idOption);

            return <div className='default radio' key={i} >
                <FormGroup
                    check key={i}
                    className={classColor}
                    id={idOption}
                    onClick={this.onClick} >

                    <Label check key={i} className='label radio'>
                        <Input type="radio" key={i}
                            value={o.VALUE}
                            name={this.props.idInput}
                            id={'r_option_'.concat(this.props.idInput).concat(i)} 
                            onClick={this.onChange} />
                        {' '}  {o.OPTION}
                    </Label>

                </FormGroup>
            </div>;
        });

        return (
            <div className="form-group default">
                {this.props.required}
                <FormGroup tag="fieldset" id={this.props.idInput} name={this.props.idInput} >
                    {options}
                </FormGroup>
            </div>
        );
    }
}