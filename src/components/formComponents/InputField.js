import React from 'react';
import { Input, InputGroupAddon, Label } from 'reactstrap';

export default class InputField extends React.Component {

    render() {
        let addon, infRequired, icon;
        if (this.props.addon) {
            addon = <InputGroupAddon addonType="prepend">{this.props.addon}</InputGroupAddon>;
        }
        if (this.props.required) {
            infRequired = <Label className='required-label'>* </Label>;
        }
        if (this.props.icon) {
            icon = <svg-icon><img src={require('./../../icons/'+this.props.icon)} 
                alt={this.props.icon} className='img' /></svg-icon>;
        }

        return (
            <div className={'input-group col-' + this.props.col}>
                <div className='col-12'>
                    {infRequired}
                    <Label>{this.props.placeholder + ':'}</Label>
                </div>
                {addon}
                {icon}
                <Input type={this.props.type}
                    name={this.props.idInput}
                    id={this.props.idInput}
                    placeholder={this.props.placeholder}
                    maxLength={this.props.maxlength}
                    required={this.props.required} />
            </div>
        );
    }
}