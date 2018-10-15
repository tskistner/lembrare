import React from 'react';
import { FormContainer, Utils, ModalBox } from '../../components';
import CategoryService from '../../service/CategoryService';

export default class Report extends React.Component {

    constructor() {
        super();
        this.state = { parentOptions: null };
        this.onOkClick = this.onOkClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
    }

    //Carregar registros
    componentWillMount() {
        CategoryService.getAllParents().then(response => {
            if (response && response.data) {
                this.setState({ parentOptions: response.data });
            }
        });
    }

    onOkClick() {
        this.props.onClick({
            ID_PARENT: Utils.getValue('id_report_pessoa'),
            DS_REPORT: Utils.getValue('ds_boletim')
        });
        return true;
    }

    onCancelClick() {
        this.props.onClick({});
        return true;
    }

    render() {
        if (this.state.parentOptions) {
            const report = (
                <div id='report_activitie'>
                    <FormContainer
                        fields={[
                            { type: 'select', idInput: 'id_report_pessoa', placeholder: 'Grau parentesco', options: this.state.parentOptions },
                            { type: 'textarea', idInput: 'ds_boletim', placeholder: 'Descrição' }
                        ]} />
                </div>);
            return (
                <ModalBox ieHiddenButton='exer'
                    dsTitle='Boletim'
                    modalBody={report}
                    ieBtOk={true}
                    ieBtCancel={true}
                    toValidateCancel={this.onCancelClick}
                    toValidateClose={this.onOkClick} />
            );
        } else {
            return null;
        }
    }

}