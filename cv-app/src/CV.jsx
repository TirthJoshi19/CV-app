import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "./Form";

export default function CVContainer(props) {
    const generatePDF = () => {
        const input = document.querySelector('.cv-container');
        const btn = input.querySelector('button');
        btn.style.display = 'none';

        const scale = 3;

        html2canvas(input, { scale }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            
            const imgWidth = canvas.width / scale
            const imgHeight = canvas.height / 4

            // Calculate the number of pages needed and the position of each part of the image
            let yPosition = 0;
            while (yPosition < imgHeight) {
                pdf.addImage(imgData, 'PNG', 0, -yPosition, pdfWidth, imgHeight, imgWidth);
                yPosition += pdfHeight;
                if (yPosition < imgHeight) {
                    pdf.addPage();
                }
            }

            pdf.save('cv.pdf');
            btn.style.display = 'block';
        }).catch(error => {
            console.error('Error generating PDF: ', error);
            btn.style.display = 'block';
        });
    };

    return (
        <div className="cv-container">
            <h1>{props.name || 'Name'}</h1>
            <div className="basic-info-container">
                <h4>Personal Information</h4>
                <p>Email: {props.email}</p>
                <p>Contact No: {props.phone}</p>
                <p>LinkedIn Username: {props.linkedin}</p>
            </div>
            <div className="basic-info-container">
                <h4>Educational Information</h4>
                <p>Education: {props.education}</p>
                <p>School Name: {props.school}</p>
                <p>Finished Studying On: {props.studyDate}</p>
            </div>
            <div className="basic-info-container">
                <h4>Work Experience</h4>
                <p>Job Position: {props.job}</p>
                <p>Company's Name: {props.company}</p>
                <p>Joining Date: {props.joiningDate}</p>
                <p>Leaving Date: {props.leavingDate}</p>
            </div>
            <Button text='Download as PDF' onClick={generatePDF} />
        </div>
    );
}
