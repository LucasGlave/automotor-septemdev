import Home from "./Home/Home";
import Nosotros from "./Nosotros/Nosotros";
import Usados from "./Vehiculos/Usados";
import Reseñas from "./Reseñas/Reseñas";
import Contacto from "./Contacto/Contacto";

type InicioProps = {
  id: string;
};

function Inicio({ id }: InicioProps) {
  return (
    <div className="min-h-screen w-full font-roboto" id={id}>
      <Home />
      <Usados id="VEHICULOS" />
      <Reseñas id="RESEÑAS" />
      <Nosotros id="NOSOTROS" />
      <Contacto id="CONTACTO" />
    </div>
  );
}

export default Inicio;
