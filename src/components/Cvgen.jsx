import { useState } from 'react'
import jsPDF from 'jspdf'

export const Cvgen = (props) => {
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
        doc.text(50, 50, handleChange + ' ')
        doc.setFont('courier', 'bold')
        doc.text(50, 150, 'This is the initial commit')
        doc.save('cv.pdf')
    }
    return (
        <div><form onSubmit={handleSubmit}>
            <input type='text' value ={field} onChange={handleChange} placeholder='Insira seu texto'></input>
            <button onClick={CvGenerator}>Gerar CV</button>
        </form></div>

    )
}
