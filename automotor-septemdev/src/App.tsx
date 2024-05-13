import Home from './components/Home'
import imageBackground from './assets/fondo-2.jpg'
import Header from './components/Header'

function App() {
  return (
    <div className='h-full w-full'>
        <img src={imageBackground} alt="fondo" className='fixed w-screen h-screen object-cover z-0'/>
        <Header />
        <Home />
    </div>
  )
}

export default App
