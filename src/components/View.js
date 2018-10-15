import React from 'react';
import { GridMode, ModalBox } from './';
import { Button } from 'reactstrap';
import Utils from './Utils';

export default class View extends React.Component {

    constructor(props) {
        super(props);
        this.onGrid = this.onGrid.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onNewRecord = this.onNewRecord.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.validate = this.validate.bind(this);
        this.state = { isEditting: false };
        this.registers = this.props.registers;
    }

    //Ao adicionar novo registro
    onNewRecord() {
        this.registerActual = null;
        this.setState({ isEditting: true });
    }

    //Exibir modo edição
    onEdit(register) {
        this.registerActual = register;
        this.setState({ isEditting: true });
    }

    //Exibir modo grid
    onGrid() {
        this.registerActual = null;
        this.setState({ isEditting: false });
    }

    //Salvar informações. Chama método passado nas propriedades, para ser tratado dentro de cada view
    //Após salvar/atualizar informação, é atualizado os registros do grid
    onSave() {
        if (this.validate()) {
            this.props.onSave(this.registerActual ? this.registerActual[0].VALUE : null).then(res => {
                this.registers = res.data;
                this.setState({ isEditting: false });
            });
            return false;
        }
        return true;
    }

    //Deletar registro
    //Após deletar informação, é atualizado os registros do grid
    onDelete(register) {
        this.props.onDelete(register[0].VALUE).then(res => {
            this.registers = res.data;
            this.setState({ isEditting: false });
        });
    }

    //Realizar validação de campos obrigatórios
    validate() {
        const divMode = document.getElementById(this.props.id);
        if (divMode) {
            const requiredAtribs = divMode.querySelectorAll("[required]");
            for (let i = 0; i < requiredAtribs.length; i++) {
                if (!requiredAtribs[i].value) {
                    return false;
                }
            }
        }
        return true;
    }

    //Após atualizar view
    componentDidUpdate() {
        if (this.registerActual) {
            this.registerActual.map(r => {
                if (r.NAME !== 'id') {
                    Utils.setValue(r.NAME, r.VALUE);
                }
                return null;
            });
        }
    }

    render() {
        const isEditting = this.state.isEditting;
        let mode;

        if ((isEditting || this.props.noGrid) && this.props.modeV) {
            const btCancel = this.registers ?
                <Button color="secondary" onClick={this.onGrid}>Cancelar</Button> : null;
            mode = (
                <div>
                    {this.props.modeV}
                    <form align='center'>
                        <footer>
                            <ModalBox ieModal={false}
                                dsTitle='Atenção!'
                                modalBody={<p>Favor preencher todos os campos obrigatórios!</p>}
                                ieBtOk={true}
                                toValidate={this.onSave}
                                ieButtonToClick={'Salvar'} />
                            {btCancel}
                        </footer>
                    </form>
                </div>);
        } else {
            mode = (
                <div>
                    <GridMode 
                        onEdit={this.onEdit}
                        onDelete={this.onDelete}
                        registers={this.registers}
                        header={this.props.headerGrid}
                        onNewRecord={this.onNewRecord} />
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