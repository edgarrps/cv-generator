import jsPDF from 'jspdf'

export function Cvgen () {

    const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4', putOnlyUsedFonts: true })

        doc.setFontSize(30)
        doc.text(6, 16, `${name} ${lastName}`)
        doc.setFontSize(20)
        doc.text(6, 23, `${page} anos`)
        doc.text(6, 30, `${maritalStatus}`)
        doc.setDrawColor(255, 0, 0)
        doc.setLineWidth(1.5)
        doc.line(75, 300, 75, 58)
        doc.setFontSize(10)
        
        //full address
        doc.text(8, 40, `Endereço: ${address}. ${district}. ${city}. ${stt}.`)

        doc.text(8, 45, `Telefone: ${tel}`)
        doc.text(8, 50, `Email: ${email}`)
        doc.text(8, 55, linkedin ? `LinkedIn: ${linkedin}` : '')

        doc.save('cv.pdf')
        return
    }