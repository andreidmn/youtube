const PDFDocument = require('pdfkit');
const fs = require('fs');


// Create a new PDF document
const doc = new PDFDocument();

doc.fontSize(18)
    .text('AI is cool', { align: 'center' })
    .moveDown();

doc.fontSize(12)
    .text('Artificial Intelligence (AI) is revolutionizing the world we live in.', { width: 400, align: 'justify' })
    .moveDown()
    .text('As AI continues to advance and become more accessible, we can expect to see even more exciting ', { width: 400, align: 'justify' });


// Save the PDF to a file
doc.pipe(fs.createWriteStream('pdf.pdf'));
doc.end();