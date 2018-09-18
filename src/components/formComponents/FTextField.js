import React from 'react';
import { FormText, Label, Input } from 'reactstrap';

export default class FTextField extends React.Component {
    render() {
        return (
            <div className={'input-group col-' + this.props.col}>
                <Label className='col-12'>{this.props.placeholder+':'}</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted"  id={this.props.idInput} name={this.props.idInput} >
                    {this.props.text}
                 </FormText>
            </div>
        );
    }
}