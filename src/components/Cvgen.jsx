import jsPDF from 'jspdf'

export function Cvgen({ name, lastName, age, maritalStatus, address, district, city, stt, zipCode, tel, email, linkedin, description }) {

    const genPDF = () => {
        const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4', putOnlyUsedFonts: true })


        doc.setDrawColor(255, 0, 0) // red
        doc.setLineWidth(1.5) // line thickness
        doc.line(0, 50, 1000, 50) // (x1, y1, x2, y2) coordinates

        doc.setFontSize(24)
        doc.text(6, 15, `${name} ${lastName}`)
        doc.setFontSize(18)
        doc.text(8, 24, age ? `anos - ${maritalStatus}` : '')
        doc.setFontSize(10)
        //full address
        doc.text(8, 30, `Endereço: ${address}. ${district}. ${city} - ${stt}.`)
        doc.text(8, 35, `CEP: ${zipCode} - Telefone: ${tel}`)
        doc.text(8, 40, `Email: ${email}`)
        doc.text(8, 45, linkedin ? `LinkedIn: ${linkedin}` : '')
        doc.setFontSize(18)
        doc.text(12, 62, 'Objetivos')
        doc.setFontSize(10)
        let splitText = doc.splitTextToSize(description, 180)
        doc.text(splitText, 15, 70, {maxWidth: 180, align: "justify"} )
        doc.save('cv.pdf')
    }

    return (
        <button type='submit' onClick={genPDF} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Gerar PDF</button>
    )
}