import jsPDF from 'jspdf'
import { useState } from 'react'

export function Cvgen({
    name,
    lastName,
    age,
    maritalStatus,
    address,
    district,
    city,
    stt,
    zipCode,
    tel,
    email,
    linkedin,
    description,
    initialDateGA,
    finalDateGA,
    checkedGA,
    formationA,
    formationPlaceA,
    initialDateGB,
    finalDateGB,
    checkedGB,
    formationB,
    formationPlaceB,
    initialDateXPA,
    finalDateXPA,
    checkedXPA,
    initialDateXPB,
    finalDateXPB,
    checkedXPB,
    officeA,
    officeB,
    companyA,
    companyB,
    skillsXPA,
    skillsXPB,
    
}) {

    const genPDF = () => {
        const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4', putOnlyUsedFonts: true })
        
        doc.setDrawColor(60, 60, 30) // red
        doc.setLineWidth(1.5) // line thickness
        doc.line(0, 50, 1000, 50) // (x1, y1, x2, y2) coordinates

        doc.setFontSize(24)
        doc.text(6, 15, `${name} ${lastName}`)
        doc.setFontSize(18)
        doc.text(8, 24, (age && maritalStatus ?
            age + ' anos - ' + maritalStatus : (age ?
                age + ' anos' : (maritalStatus ?
                    maritalStatus : ''))))
        doc.setFontSize(10)

        //full address
        doc.text(8, 30, ((address || district || city || stt) ?
            'Endereço: ' : '') + (address ?
                address + '. ' : '') + (district ?
                    district + '. ' : '') + (city ?
                        city : '') + (stt ?
                            ' - ' + stt : ''))

        doc.text(8, 35, (zipCode ? 'CEP: ' + zipCode : '') + (tel ? ' Telefone: ' + tel : ''))

        doc.text(8, 40, (email ? 'E-mail: ' + email : ''))
        doc.text(8, 45, linkedin ? `LinkedIn: ${linkedin}` : '')

        doc.setFontSize(18)
        doc.text(12, 62, 'Objetivos')

        doc.setFontSize(10)
        const splitText = doc.splitTextToSize(description, 180)
        doc.text(splitText, 10, 70, { maxWidth: 180, align: "justify" })

        doc.setLineWidth(0.2) // line thickness
        doc.line(0, 120, 190, 120) // (x1, y1, x2, y2) coordinates

        //FORMATION
        doc.setFontSize(18)
        doc.text(12, 130, 'Formação Acadêmica')

        //Formation A
        doc.setFontSize(12)
        doc.text(20, 140, (initialDateGA && finalDateGA ?
            `Data inicio: ${initialDateGA} | Data fim: ${finalDateGA}` : (initialDateGA && checkedGA ?
                `Data inicio: ${initialDateGA} | Em curso` : (initialDateGA ?
                    `Data inicio: ${initialDateGA}` : ''))))

        doc.setFontSize(10)
        doc.text(20, 145, (formationA && formationPlaceA ?
            `> ${formationA} - ${formationPlaceA}` : (formationA ?
                '> ' + formationA : (formationPlaceA ?
                    '> ' + formationPlaceA : ''))))

        //FormationB
        doc.setFontSize(12)
        doc.text(20, 160, (initialDateGB && finalDateGB ?
            `Data inicio: ${initialDateGB} | Data fim: ${finalDateGB}` : (initialDateGB && checkedGB ?
                `Data inicio: ${initialDateGB} | Em curso` : (initialDateGB ?
                    `Data inicio: ${initialDateGB}` : ''))))

        doc.setFontSize(10)
        doc.text(20, 165, (formationA && formationPlaceA ?
            `> ${formationB} - ${formationPlaceB}` : (formationB ?
                '> ' + formationB : (formationPlaceB ? '> ' + formationPlaceB : ''))))

        doc.setLineWidth(0.2) // line thickness
        doc.line(0, 180, 190, 180) // (x1, y1, x2, y2) coordinates

        //XP
        doc.setFontSize(18)
        doc.text(12, 190, 'Experiência Profissional')

        //XP A
        doc.setFontSize(12)
        doc.text(20, 200, (initialDateXPA && finalDateXPA ?
            `Data inicio: ${initialDateXPA} | Data fim: ${finalDateXPA}` : (initialDateXPA && !checkedXPA ?
                `Data inicio: ${initialDateXPA} | Cargo atual` : (initialDateXPA ?
                    `Data inicio: ${initialDateXPA}` : ''))))

        doc.setFontSize(10)
        doc.text(20, 205, (companyA && officeA ?
                        `> ${companyA} - ${officeA}` : (companyA ?
                            '> ' + companyA : (officeA ?
                                '> ' + officeA : ''))))

        const splitText2 = doc.splitTextToSize(skillsXPA, 140)
        doc.text(splitText2, 24, 210, { maxWidth: 150, align: "justify" })


        //XP B
        doc.setFontSize(12)
        doc.text(20, 248, (initialDateXPB && finalDateXPB ?
            `Data inicio: ${initialDateXPB} | Data fim: ${finalDateXPB}` : (initialDateXPB && !checkedXPB ?
                `Data inicio: ${initialDateXPB} | Cargo atual` : (initialDateXPB ?
                    `Data inicio: ${initialDateXPB}` : ''))))
        doc.setFontSize(10)
        doc.text(20, 253, (companyB && officeB ?
            `> ${companyB} - ${officeB}` : (companyB ?
                '> ' + companyB : (officeB ?
                    '> ' + officeB : ''))))

        const splitText3 = doc.splitTextToSize(skillsXPB, 140)
        doc.text(splitText3, 24, 258, { maxWidth: 150, align: 'justify' })

        doc.setLineWidth(40) // line thickness
        doc.line(215, 50, 215, 350) // (x1, y1, x2, y2) coordinates

        doc.save('cv.pdf')
    }

    return (
        <button type='submit' onClick={name && lastName && maritalStatus && age && address && district && city && stt && zipCode && tel && description ? genPDF : null} className='text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Gerar PDF</button>
    )
}