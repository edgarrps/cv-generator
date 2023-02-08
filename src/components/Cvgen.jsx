import { useState } from 'react'
import jsPDF from 'jspdf'

export const Cvgen = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [address, setAddress] = useState('')
    const [district, setDistrict] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [tel, setTel] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [email, setEmail] = useState('')

    const handleChangeName = e => setName(e.target.value)
    const handleChangeLastName = e => setLastName(e.target.value)
    const handleChangeAge = e => setAge(e.target.value)
    const handleChangeAddress = e => setAddress(e.target.value)
    const handleChangeDistrict = e => setDistrict(e.target.value)
    const handleChangeCity = e => setCity(e.target.value)
    const handleChangeZipCode = e => setZipCode(e.target.value)
    const handleChangeTel = e => setTel(e.target.value)
    const handleChangeLinkedin = e => setLinkedin(e.target.value)
    const handleChangeEmail = e => setEmail(e.target.value)


    const handleSubmit = e => e.preventDefault()

    const doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
        putOnlyUsedFonts: true
    })
    const CvGenerator = () => {
        doc.addFont('Mulish', 'Mulish', 'bold')
        doc.setFont('Mulish', 'bold')
        doc.setFontSize(50)
        doc.text(50, 50, `${name} ${lastName}`)
        doc.setFontSize(20)
        doc.text(50, 57, `${age} anos`)

        doc.save('cv.pdf')
    }
    return (
        <div className='p-5 max-w-fit mx-auto px-10 bg-white rounded-3xl shadow-xl flex items-center space-x-4'>
            <form onSubmit={handleSubmit}>
                <h1 className='font-bold p-4 text-4xl text-gray-900 dark:text-white'>Dados pessoais</h1>
                <div className='p-5 grid gap-6 mb-6 md:grid-cols-2'>
                    <div>
                        <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Nome</label>
                        <input onChange={handleChangeName} type='text' id='name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='João' required />
                    </div>
                    <div>
                        <label htmlFor='lastname' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Sobrenome</label>
                        <input onChange={handleChangeLastName} type='text' id='lastname' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Silva' required />
                    </div>
                    <div>
                        <label htmlFor='age' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Idade</label>
                        <input onChange={handleChangeAge} type='number' id='age' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='31' required />
                    </div>
                    <div>
                        <label htmlFor='address' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Endereço</label>
                        <input onChange={handleChangeAddress} type='text' id='address' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Rua ABC, 1234' required />
                    </div>
                    <div>
                        <label htmlFor='district' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Bairro</label>
                        <input onChange={handleChangeDistrict} type='text' id='district' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Tijuca' required />
                    </div>
                    <div>
                        <label htmlFor='city' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Cidade</label>
                        <input onChange={handleChangeCity} type='text' id='city' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Rio de Janeiro' required />
                    </div>
                    <div>
                        <label htmlFor='zipcode' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>CEP</label>
                        <input onChange={handleChangeZipCode} type='text' id='zipcode' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='00000-000' pattern='[(0-9)]{5}-[0-9]{3}' required />
                    </div>
                    <div>
                        <label htmlFor='tel' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Telefone</label>
                        <input onChange={handleChangeTel} type='tel' id='tel' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='(00) 00000-0000' pattern='[(0-9)]{2} [0-9]{5}-[0-9]{4}' required />
                    </div>
                    <div>
                        <label htmlFor='linkedin' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>LinkedIn</label>
                        <input onChange={handleChangeLinkedin} type='url' id='linkedin' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='linkedin.com/joaosilva' required />
                    </div>
                    <div>                   
                        <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email address</label>
                        <input onChange={handleChangeEmail} type='email' id='email' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='joaosilva@dominio.com' required />
                    </div>
                </div>
                <div className='mb-6'>
                    <label htmlFor='textField' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Texto genérico</label>
                    <input id='textField' type='textarea' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='text' />
                    </div>
                <button onClick={CvGenerator} type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Submit</button>
            </form>
        </div>

    )
}
