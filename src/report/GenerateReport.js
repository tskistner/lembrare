import React from 'react';
import * as jsPDF from 'jspdf';
import { FormContainer, Utils } from '../components';
import { Button, Label } from 'reactstrap';
import html2canvas from 'html2canvas';

const elementToIgnore = {
    '#ignorePDF': function (element, renderer) {
        return true;
    }
};

export default class GenerateReport extends React.Component {

    constructor() {
        super();
        this.generateReport = this.generateReport.bind(this);
    }

    pdfToHTML() {
        const pdf = new jsPDF('p', 'pt', 'letter');
        const source = document.getElementById('relatorio_desempenho');

        html2canvas(document.getElementById("relatorio_desempenho")).then(canvas => {
            var imgData = canvas.toDataURL('image/jpeg');
            var doc = new jsPDF('p', 'mm', 'a4');
            doc.setFontSize(10);
            doc.addImage(imgData, 'jpeg', 10, 20);
            doc.save('desempenho.pdf');
        });


        /*const margins = {
            top: 50,
            left: 60,
            width: 545
        };

        pdf.fromHTML(
            source,
            margins.left,
            margins.top,
            {
                'width': margins.width,
                'elementHandlers': elementToIgnore
            },
            () => {
                pdf.save('teste.pdf');
            }
        );*/


    }

    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
    }

    generateReport() {
        const type = Utils.getValue('ie_report');
        const doc = new jsPDF()

        if (type === 1) {

        }
        doc.text('Hello world!', 10, 10);
        doc.save('a4.pdf');
        doc.output('dataurlnewwindow');
    }

    render() {

        return (
            <div className='view div' id='relatorio_desempenho' >
                <Label className='view title' align='center'> Relatório de desempenho </Label>

                <FormContainer
                    fields={[
                        {
                            type: 'select', idInput: 'ie_report', placeholder: 'Relatório',
                            options: [{ OPTION: 'Desempenho', VALUE: 1 }]
                        }
                    ]}
                />
                <div align='center'>
                    <Button onClick={this.pdfToHTML} className='button-default'>Salvar como PDF</Button>
                </div>
                <img src={require('../icons/person-icon-blue.png')} className='view image' alt='profile' />
            </div>
        );
    }
}

/**
 
import { Document, Page } from 'react-pdf';
 
  <div>
                <Document
                    file={require('./somefile.pdf')}
                    onLoadSuccess={this.onDocumentLoad}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
            </div>
 */