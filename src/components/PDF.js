import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

class PDF {

    getImage(id) {
        return new Promise((resolve, reject) => {
            html2canvas(document.getElementById(id)).then(canvas => {
                resolve(canvas.toDataURL('image/jpeg'));
            }, () => reject());
        })
    }

    generate(id, idImg, name) {

        var elementHandler = {
            '#chart_report': function (element, renderer) {
                return true;
            }
        };

        /*var doc = new jsPDF('landscape', 'cm', [50, 50]);
        doc.fromHTML(
            document.getElementById(id),
            15,
            15,
            {
                'width': 180, 'elementHandlers': elementHandler
            });*/
        html2canvas(document.getElementById(id)).then(canvas => {
            const imgData = canvas.toDataURL('image/jpeg', 1.0);
            //const doc = new jsPDF('p', 'mm', 'a4');
            const doc = new jsPDF('landscape', 'cm', [50, 50]);
            doc.setFontSize(10);
            doc.addImage(imgData, 'JPEG', 1, 1);
            doc.save(name.concat('.pdf'));
        });

    }

}

export default (new PDF());