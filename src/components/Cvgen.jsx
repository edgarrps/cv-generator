import { useState } from 'react'
import jsPDF from 'jspdf'

export const Cvgen = () => {
    const [field, setField] = useState('')

    const handleChange = e => setField(e.target.value)
    
    const handleSubmit = e => e.preventDefault()

    const doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
        putOnlyUsedFonts: true
    })
    const CvGenerator = () => {
        doc.text(50, 50, field)
        doc.setFont('courier', 'bold')
        doc.save('cv.pdf')
    }
    return (
        <div><form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} placeholder='Insira seu texto'></input>
            <button onClick={CvGenerator}>Gerar CV</button>
        </form></div>

    )
}
