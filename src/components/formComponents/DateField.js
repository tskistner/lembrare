import React, { Component } from 'react';
import { InputGroupAddon, Label } from 'reactstrap';
import calendar from './../../icons/calendar.png';

export default class DateField extends Component {

    render() {

        /*var $ = require('jquery');
        $('#datepicker').datepicker({
            uiLibrary: 'bootstrap4'
        });
        */

        /**<InputGroupAddon addonType='prepend'>
                    <img src={calendar} width='40px' alt={this.props.placeholder} />
                </InputGroupAddon> */

        return (
            <div className={'input-group date col-'+this.props.col} data-provide='datepicker'>
                <Label className='col-12'>{this.props.placeholder+':'}</Label>
                <input type='date' className='form-control' 
                    id={this.props.idInput} 
                    name={this.props.idInput}/>
                
            </div>
        )
    }
}

