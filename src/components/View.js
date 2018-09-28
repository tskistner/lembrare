import React from 'react';
import GridMode from './viewComponents/GridMode';
import { Button } from 'reactstrap';

export default class View extends React.Component {

    constructor(props) {
        super(props);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.onSave = this.onSave.bind(this);
        this.state = { isEditting: false };
    }

    handleEditClick() {
        this.setState({ isEditting: true });
    }

    onSave() {

        function validate(id) {
            const divMode = document.getElementById(id);
            if (divMode) {
                const requiredAtribs = divMode.querySelectorAll("[required]");
                for (let i = 0; i < requiredAtribs.length; i++) {
                    if (!requiredAtribs[i].value) {
                        alert('Favor preencher todos os campos obrigatórios!');
                        return false;
                    }
                }
            }
            return true;
        }

        if (validate(this.props.id)) {
            this.props.onSave();
            this.setState({ isEditting: false });
        }
    }

    render() {
        const isEditting = this.state.isEditting;
        let mode;

        if ((isEditting || !this.props.registers)&& this.props.modeV) {
            mode = (
                <div id='oi'>
                    {this.props.modeV}
                    <form align='center'>
                        <Button id='btn_salvar' onClick={this.onSave}>Salvar</Button>
                    </form>
                </div>);
        } else {
            const registers = this.props.registers;
            mode = (
                <div>
                    <GridMode
                        handleClick={this.handleEditClick}
                        levels={registers}
                    />
                </div>
            );
        }

        return (
            <div className='col-12 view div'>
                {this.props.header}
                {mode}
            </div>
        );
    }
}