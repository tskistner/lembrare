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
        html2canvas(document.getElementById(id)).then(canvas => {
            const imgData = canvas.toDataURL('image/jpeg', 1.0);
            //const doc = new jsPDF('p', 'mm', 'a4');
            var doc = new jsPDF('landscape', 'cm', [50,50]);
            doc.setFontSize(10);
            doc.addImage(imgData, 'JPEG', 1, 1);
            const a = doc.save(name.concat('.pdf'));
        });
    }

}

export default (new PDF());