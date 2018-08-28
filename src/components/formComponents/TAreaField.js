import React from 'react';
import { Input, Label } from 'reactstrap';

export default class TAreaField extends React.Component {
    render() {
        return (
            <div className={'col-' + this.props.col}>
                <Label className='col-12'>{this.props.placeholder+':'}</Label>
                <Input type="textarea"
                    name={this.props.idInput}
                    id={this.props.idInput}
                    maxLength={this.props.maxlength}
                    rows={this.props.rows} />
            </div>
        );
    }
}