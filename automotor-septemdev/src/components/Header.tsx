// import logo1 from '../assets/logo-1.jpg'
import logo2 from '../assets/logo-2.jpg'


const Header = () => {
  return (
    <div className="w-full h-full absolute flex items-start justify-center z-10">
        <div className="flex justify-between items-center mt-3 px-2 border rounded-full z-10 w-[70%] h-20 backdrop-blur-md bg-[#00000023]">
            <div className='w-16 h-16 rounded-full overflow-hidden'>
                {/* <img src={logo1} alt="logo-1" className='w-full h-full object-cover'/> */}
                <img src={logo2} alt="logo-2" className='w-full h-full object-cover'/>
            </div>
            <div className='flex flex-row gap-8 mr-10 font-semibold justify-center'>
                <h3>NOSOTROS</h3>
                <h3>USADOS</h3>
                <h3>NUEVOS</h3>
                <h3>CONSULTA</h3>
            </div>
        </div>
    </div>
  )
}

export default Header