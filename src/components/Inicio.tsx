import Home from "./Home/Home";
import Nosotros from "./Nosotros/Nosotros";
import Usados from "./Vehiculos/Usados";
import Reseñas from "./Reseñas/Reseñas";
import Consultas from "./Consultas/Consultas";

type InicioProps = {
  id: string
}

function Inicio({id}: InicioProps) {
  return (
    <div className="min-h-screen w-full font-roboto" id={id}>
        <Home />
        <Reseñas id="RESEÑAS" />
        <Usados id="VEHICULOS" />
        <Nosotros id="NOSOTROS" />
        <Consultas id="CONSULTAS" />
      </div>
  )
}

export default Inicio