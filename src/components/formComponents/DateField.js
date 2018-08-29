import React, { Component } from 'react';
import { Label } from 'reactstrap';

export default class DateField extends Component {

    render() {

        /*var $ = require('jquery');
        $('#datepicker').datepicker({
            uiLibrary: 'bootstrap4'
        });
        */

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

