import {  Link } from "react-router-dom"
import { useState } from "react"
import { Cvgen } from "../components/Cvgen"
import { IMaskInput } from "react-imask"

export default function Profile() {
    const [checkedGA, setCheckedGA] = useState(false)
    const [checkedGB, setCheckedGB] = useState(false)
    const [checkedXPA, setCheckedXPA] = useState(false)
    const [checkedXPB, setCheckedXPB] = useState(false)
    const [initialDateGA, setInitialDateGA] = useState('')
    const [initialDateGB, setInitialDateGB] = useState('')
    const [formationA, setFormationA] = useState('')
    const [formationB, setFormationB] = useState('')
    const [formationPlaceA, setFormationPlaceA] = useState('')
    const [formationPlaceB, setFormationPlaceB] = useState('')
    const [finalDateGA, setFinalDateGA] = useState('')
    const [finalDateGB, setFinalDateGB] = useState('')
    const [initialDateXPA, setInitialDateXPA] = useState('')
    const [initialDateXPB, setInitialDateXPB] = useState('')
    const [finalDateXPA, setFinalDateXPA] = useState('')
    const [finalDateXPB, setFinalDateXPB] = useState('')
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
    const [companyA, setCompanyA] = useState('')
    const [companyB, setCompanyB] = useState('')
    const [officeA, setOfficeA] = useState('')
    const [officeB, setOfficeB] = useState('')
    const [skillsXPA, setSkillsXPA] = useState('')
    const [skillsXPB, setSkillsXPB] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit = e => e.preventDefault()


    return (

        <div className='p-5 max-w-fit mx-auto px-10 rounded-3xl shadow-xl flex items-center space-x-4'>

            <form onSubmit={handleSubmit}>
                <div>
                    <h1 className='font-bold p-4 text-4xl text-gray-900'>Dados Pessoais</h1>
                    <div className='p-5 grid gap-6 mb-6 md:grid-cols-4'>
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
                            <select onChange={e => setStt(e.target.value)} value={stt} id='state' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Selecione' required>
                                <option></option>
                                <option>AC</option>
                                <option>AL</option>
                                <option>AP</option>
                                <option>AM</option>
                                <option>BA</option>
                                <option>CE</option>
                                <option>DF</option>
                                <option>ES</option>
                                <option>GO</option>
                                <option>MA</option>
                                <option>MT</option>
                                <option>MS</option>
                                <option>MG</option>
                                <option>PA</option>
                                <option>PB</option>
                                <option>PR</option>
                                <option>PE</option>
                                <option>PI</option>
                                <option>RJ</option>
                                <option>RN</option>
                                <option>RS</option>
                                <option>RO</option>
                                <option>RR</option>
                                <option>SC</option>
                                <option>SP</option>
                                <option>SE</option>
                                <option>TO</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor='zipcode' className='block mb-2 text-sm font-medium text-gray-900'>CEP</label>
                            <IMaskInput mask='00000-000' onChange={e => setZipCode(e.target.value)} value={zipCode} type='text' id='zipcode' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='00000-000' pattern='[(0-9)]{5}-[0-9]{3}' required />
                        </div>
                        <div>
                            <label htmlFor='tel' className='block mb-2 text-sm font-medium text-gray-900'>Telefone</label>
                            <IMaskInput mask='(00) 00000-0000' onChange={e => setTel(e.target.value)} value={tel} type='text' id='tel' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='(00) 00000-0000' required />
                        </div>
                        <div>
                            <label htmlFor='linkedin' className='block mb-2 text-sm font-medium text-gray-900'>LinkedIn</label>
                            <input onChange={e => setLinkedin(e.target.value)} value={linkedin} type='text' id='linkedin' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='linkedin.com/in/joaosilva' />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900'>Email</label>
                            <input onChange={e => setEmail(e.target.value)} value={email} type='email' id='email' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='joaosilva@dominio.com' />
                        </div>
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='objective' className='block mb-2 text-sm font-medium text-gray-900'>Objetivos</label>
                        <textarea id='objective' maxLength='1200' onChange={e => setDescription(e.target.value)} value={description} className='resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4' placeholder='Objetivos de carreira (máx. 1200 caracteres)' required/>
                    </div>
                    {/* FORMATION */}
                    <div className='mb-6'>
                        <hr className="mb-6"></hr>
                        <div className='space-y-4'>
                            <label className='font-bold p-4 text-4xl text-gray-900'>Formação Acadêmica</label>
                            <br></br>
                            <br></br>
                            {/* Formation A */}
                            <div className='grid gap-6 mb-6 md:grid-cols-5'>
                                <div className=''>
                                    <label htmlFor='initialDateGraduationA' className='block mb-2 text-sm font-medium text-gray-900'>Data Início</label>
                                    <input type='date' id='initialDateGraduationA' value={initialDateGA} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:w-auto p-1.5' onChange={e => setInitialDateGA(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor='finalDateGraduationA' className='block mb-2 text-sm font-medium text-gray-900'>Data Fim</label>
                                    <input type='date' id='finalDateGraduationA' value={finalDateGA} disabled={checkedGA ? true : false} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:w-auto p-1.5' onChange={e => setFinalDateGA(e.target.value)} />
                                </div>
                                <div className='items-center'>
                                    <label htmlFor='makingA' className='block mb-2 text-sm font-medium text-gray-900'>Em andamento?</label>
                                    <input id='makingA' type='checkbox' value={checkedGA} className='w-3' onClick={() => { setCheckedGA(!checkedGA) }} />
                                </div>
                            </div>
                            <div></div>
                            <div className='grid gap-6 mb-6 md:grid-cols-2'>
                                <div>
                                    <label htmlFor="formationA" className='block mb-2 text-sm font-medium text-gray-900'>Instituição</label>
                                    <input type='text' id='formationA' onChange={e => setFormationA(e.target.value)} value={formationA} className='resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4' placeholder='Local da formação' />
                                </div>
                                <div>
                                    <label htmlFor="institutionA" className='block mb-2 text-sm font-medium text-gray-900'>Formação</label>
                                    <input type='text' id='institutionA' onChange={e => setFormationPlaceA(e.target.value)} value={formationPlaceA} className='resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4' placeholder='Formação' />
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                            {/* Formation B */}
                            <div className='grid gap-6 mb-6 md:grid-cols-5'>
                                <div className=''>
                                    <label htmlFor='initialDateGraduationB' className='block mb-2 text-sm font-medium text-gray-900'>Data Início</label>
                                    <input type='date' id='initialDateGraduationB' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:w-auto p-1.5' onChange={e => setInitialDateGB(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor='finalDateGraduationB' className='block mb-2 text-sm font-medium text-gray-900'>Data Fim</label>
                                    <input type='date' value={finalDateGB} disabled={checkedGB ? true : false} id='finalDateGraduationB' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:w-auto p-1.5' onChange={e => setFinalDateGB(e.target.value)} />
                                </div>
                                <div className='items-center'>
                                    <label htmlFor='makingB' className='block mb-2 text-sm font-medium text-gray-900'>Em andamento?</label>
                                    <input id='makingB' type='checkbox' value={checkedGB} className='w-3' onClick={() => { setCheckedGB(!checkedGB) }} />
                                </div>
                            </div>
                            <div></div>
                            <div className='grid gap-6 mb-6 md:grid-cols-2'>
                                <div>
                                    <label htmlFor="formationB" className='block mb-2 text-sm font-medium text-gray-900'>Instituição</label>
                                    <input type='text' id='formationB' onChange={e => setFormationB(e.target.value)} value={formationB} className='resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4' placeholder='Local da formação' />
                                </div>
                                <div>
                                    <label htmlFor="institutionB" className='block mb-2 text-sm font-medium text-gray-900'>Formação</label>
                                    <input type='text' id='institutionB' onChange={e => setFormationPlaceB(e.target.value)} value={formationPlaceB} className='resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4' placeholder='Formação' />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* PROFESSIONAL XP */}
                    <div className='mb-6'>
                        <hr className="mb-6"></hr>
                        <div className='space-y-4'>
                            <label className='font-bold p-4 text-4xl text-gray-900'>Experiência Profissional</label>
                            <br></br>
                            <br></br>
                            {/* ProXP A */}
                            <div className='grid gap-6 mb-6 md:grid-cols-5'>
                                <div className=''>
                                    <label htmlFor='initialDateXPA' className='block mb-2 text-sm font-medium text-gray-900'>Data Início</label>
                                    <input type='date' id='initialDateXPA' value={initialDateXPA} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:w-auto p-1.5' onChange={e => setInitialDateXPA(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor='finalDateXPA' className='block mb-2 text-sm font-medium text-gray-900'>Data Fim</label>
                                    <input type='date' id='finalDateXPA' value={finalDateXPA} disabled={checkedXPA ? true : false} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:w-auto p-1.5' onChange={e => setFinalDateXPA(e.target.value)} />
                                </div>
                                <div className='items-center'>
                                    <label htmlFor='stillA' className='block mb-2 text-sm font-medium text-gray-900'>Empresa atual?</label>
                                    <input id='stillA' type='checkbox' value={checkedXPA} className='w-3' onClick={() => { setCheckedXPA(!checkedXPA) }} />
                                </div>
                            </div>
                            <div></div>
                            <div className='grid gap-6 mb-6 md:grid-cols-2'>
                                <div>
                                    <label htmlFor="companyA" className='block mb-2 text-sm font-medium text-gray-900'>Instituição/Empresa</label>
                                    <input type='text' id='companyA' onChange={e => setCompanyA(e.target.value)} value={companyA} className='resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4' placeholder='Local de trabalho' />
                                </div>
                                <div>
                                    <label htmlFor="officeA" className='block mb-2 text-sm font-medium text-gray-900'>Cargo</label>
                                    <input type='text' id='officeA' onChange={e => setOfficeA(e.target.value)} value={officeA} className='resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4' placeholder='Nome do cargo' />
                                </div>
                            </div>
                            <div className='mb-6'>
                                <label htmlFor='skillsXPA' className='block mb-2 text-sm font-medium text-gray-900'>Atribuições</label>
                                <textarea id='skillsXPA' maxLength='700' onChange={e => setSkillsXPA(e.target.value)} value={skillsXPA} className='resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4' placeholder='Atribuições do cargo (máx. 700 caracteres)' />
                            </div>
                            <br></br>
                            <br></br>
                            {/* ProXP B */}
                            <div className='grid gap-6 mb-6 md:grid-cols-5'>
                                <div className=''>
                                    <label htmlFor='initialDateXPB' className='block mb-2 text-sm font-medium text-gray-900'>Data Início</label>
                                    <input type='date' id='initialDateXPB' value={initialDateXPB} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:w-auto p-1.5' onChange={e => setInitialDateXPB(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor='finalDateXPB' className='block mb-2 text-sm font-medium text-gray-900'>Data Fim</label>
                                    <input type='date' id='finalDateXPB' value={finalDateXPB} disabled={checkedXPB ? true : false} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:w-auto p-1.5' onChange={e => setFinalDateXPB(e.target.value)} />
                                </div>
                                <div className='items-center'>
                                    <label htmlFor='stillB' className='block mb-2 text-sm font-medium text-gray-900'>Empresa atual?</label>
                                    <input id='stillB' type='checkbox' value={checkedXPB} className='w-3' onClick={() => { setCheckedXPB(!checkedXPB) }} />
                                </div>
                            </div>
                            <div></div>
                            <div className='grid gap-6 mb-6 md:grid-cols-2'>
                                <div>
                                    <label htmlFor="companyB" className='block mb-2 text-sm font-medium text-gray-900'>Instituição/Empresa</label>
                                    <input type='text' id='companyB' onChange={e => setCompanyB(e.target.value)} value={companyB} className='resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4' placeholder='Local de trabalho' />
                                </div>
                                <div>
                                    <label htmlFor="officeB" className='block mb-2 text-sm font-medium text-gray-900'>Cargo</label>
                                    <input type='text' id='officeB' onChange={e => setOfficeB(e.target.value)} value={officeB} className='resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4' placeholder='Nome do cargo' />
                                </div>
                            </div>
                            <div className='mb-6'>
                                <label htmlFor='skillsXPB' className='block mb-2 text-sm font-medium text-gray-900'>Atribuições</label>
                                <textarea id='skillsXPB' maxLength='700' onChange={e => setSkillsXPB(e.target.value)} value={skillsXPB} className='resize-y bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4' placeholder='Atribuições do cargo (máx. 700 caracteres)' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-2 grid gap-6 md:grid-cols-2'>
                    <button className='text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'><Link to='../'>Voltar</Link></button>
                    <Cvgen
                        name={name}
                        lastName={lastName}
                        maritalStatus={maritalStatus}
                        age={age}
                        address={address}
                        district={district}
                        city={city}
                        stt={stt}
                        zipCode={zipCode}
                        tel={tel}
                        linkedin={linkedin}
                        email={email}
                        description={description}
                        initialDateGA={initialDateGA}
                        finalDateGA={finalDateGA}
                        initialDateGB={initialDateGB}
                        finalDateGB={finalDateGB}
                        checkedGA={checkedGA}
                        checkedGB={checkedGB}
                        formationA={formationA}
                        formationB={formationB}
                        formationPlaceA={formationPlaceA}
                        formationPlaceB={formationPlaceB}
                        initialDateXPA={initialDateXPA}
                        finalDateXPA={finalDateXPA}
                        initialDateXPB={initialDateXPB}
                        finalDateXPB={finalDateXPB}
                        companyA={companyA}
                        companyB={companyB}
                        officeA={officeA}
                        officeB={officeB}
                        skillsXPA={skillsXPA}
                        skillsXPB={skillsXPB}
                        image={image}
                    />
                </div>
            </form>
        </div>
    )
}