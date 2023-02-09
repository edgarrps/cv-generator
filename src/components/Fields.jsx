import { useState } from 'react'
import { Link } from "react-router-dom"
import {Cvgen} from "./Cvgen"

export const Fields = () => {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [maritalStatus, setMaritalStatus] = useState('')
    const [age, setAge] = useState('')
    const [address, setAddress] = useState('')
    const [district, setDistrict] = useState('')
    const [city, setCity] = useState('')
    const [stt, setStt] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = e => e.preventDefault()

    return (<div className='p-5 max-w-fit mx-auto px-10 bg-white rounded-3xl shadow-xl flex items-center space-x-4'>
        <form onSubmit={handleSubmit}>
            <h1 className='font-bold p-4 text-4xl text-gray-900'>Dados pessoais</h1>
            <div className='p-5 grid gap-6 mb-6 md:grid-cols-2'>
                <div>
                    <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900'>Nome</label>
                    <input onChange={e => setName(e.target.value)} value={name} type='text' id='name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='João' required />
                </div>
                <div>
                    <label htmlFor='lastname' className='block mb-2 text-sm font-medium text-gray-900'>Sobrenome</label>
                    <input onChange={e => setLastName(e.target.value)} value={lastName} type='text' id='lastname' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Silva' required />
                </div>
                <div>
                    <label htmlFor='maritalstatus' className='block mb-2 text-sm font-medium text-gray-900'>Estado Civil</label>
                    <input onChange={e => setMaritalStatus(e.target.value)} value={maritalStatus} type='text' id='maritalstatus' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Casado' required />
                </div>
                <div>
                    <label htmlFor='age' className='block mb-2 text-sm font-medium text-gray-900'>Idade</label>
                    <input onChange={e => setAge(e.target.value)} value={age} type='number' id='age' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='31' required />
                </div>
                <div>
                    <label htmlFor='address' className='block mb-2 text-sm font-medium text-gray-900'>Endereço</label>
                    <input onChange={e => setAddress(e.target.value)} value={address} type='text' id='address' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Rua ABC, 1234' required />
                </div>
                <div>
                    <label htmlFor='district' className='block mb-2 text-sm font-medium text-gray-900'>Bairro</label>
                    <input onChange={e => setDistrict(e.target.value)} value={district} type='text' id='district' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Tijuca' required />
                </div>
                <div>
                    <label htmlFor='city' className='block mb-2 text-sm font-medium text-gray-900'>Cidade</label>
                    <input onChange={e => setCity(e.target.value)} value={city} type='text' id='city' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Rio de Janeiro' required />
                </div>
                <div>
                    <label htmlFor='state' className='block mb-2 text-sm font-medium text-gray-900'>Estado</label>
                    <input onChange={e => setStt(e.target.value)} value={stt} type='text' id='state' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Rio de Janeiro' required />
                </div>
                <div>
                    <label htmlFor='zipcode' className='block mb-2 text-sm font-medium text-gray-900'>CEP</label>
                    <input onChange={e => setZipCode(e.target.value)} value={zipCode} type='text' id='zipcode' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='00000-000' pattern='[(0-9)]{5}-[0-9]{3}' required />
                </div>
                <div>
                    <label htmlFor='tel' className='block mb-2 text-sm font-medium text-gray-900'>Telefone</label>
                    <input onChange={e => setTel(e.target.value)} value={tel} type='text' id='tel' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='(00) 00000-0000' pattern='[(0-9)]{2} [0-9]{5}-[0-9]{4}' required />
                </div>
                <div>
                    <label htmlFor='linkedin' className='block mb-2 text-sm font-medium text-gray-900'>LinkedIn</label>
                    <input onChange={e => setLinkedin(e.target.value)} value={linkedin} type='url' id='linkedin' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='linkedin.com/joaosilva' required />
                </div>
                <div>
                    <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900'>Email</label>
                    <input onChange={e => setEmail(e.target.value)} value={email} type='email' id='email' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='joaosilva@dominio.com' required />
                </div>
            </div>
            <div className='mb-6'>
                <label htmlFor='profile' className='block mb-2 text-sm font-medium text-gray-900'>Perfil</label>
                <textarea id='profile' onChange = {e => setDescription(e.target.value)} value={description} className='resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Descrição de perfil' />
            </div>
            <div className='p-2 grid gap-6 md:grid-cols-2'>
                <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'><Link to='/'>Voltar</Link></button>
                <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'><Link to='/professional-xp'>Próximo</Link></button>
                {/* <Cvgen name={name} lastName={lastName} type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Submit</Cvgen> */}
            </div>
        </form>
    </div>
    )
}
