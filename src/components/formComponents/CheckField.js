import React from 'react';
import { Input, Label } from 'reactstrap';

export default class CheckField extends React.Component {
    render() {
        return (
            <div className="form-group default">
                {this.props.required}
                <Label check className='checkbox-default'>
                    <Input type="checkbox" 
                        ref={this.props.idInput}
                        id={this.props.idInput} 
                        name={this.props.idInput} 
                        checked={this.props.ieChecked} />{' '}
                    {this.props.placeholder}
                </Label>
            </div>
        );
    }
}