import { Link } from "react-router-dom"
import Cv from "../img/Cv.svg"

export default () => {
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
                <div className='flex flex-col  justify-center'>
                    <img className='object-center max-w-[700px] w-full mx-auto' src={Cv} alt="" />
                </div>

                <div className='bg-gray-300 flex flex-col align-middle justify-center'>
                    <form className='space-y-10 max-w-[500px] w-full mx-auto rounded-lg bg-gray-400 p-8 px-8'>
                        <h2 className='text-4xl text-white font-bold text-center'>Gere seu currículo</h2>
                        <div className='flex flex-col text-white text-center py-2'>
                            <label>Formato simples de Currículo em formato PDF</label>
                        </div>
                        <Link to='/personal-information' className='grid w-full text-center my-5 py-2 bg-blue-500 hover:bg-blue-800 shadow-lg text-white font-semibold rounded-lg'>Iniciar</Link>
                    </form>
                </div>
            </div>

        </div >
    )
}