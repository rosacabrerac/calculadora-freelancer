import { useState } from "react";
import FormularioCostos from "./components/FormularioCostos";
import ResultadoTarifa from "./components/ResultadoTarifa";

function App() {
  const [costos, setCostos] = useState({
    salarioDeseado: 0,
    gastosFijos: 0,
    horasTrabajo: 0,
    porcentajeImprevistos: 0,
  }); // Le paso a useState el objeto con los valores iniciales en cero, desestructurando el array que devuelve useState y así obtengo la variable contenedora (costos)

  const { salarioDeseado, gastosFijos, horasTrabajo, porcentajeImprevistos } =
    costos; // Para no escribir "costos.salarioDeseado, costos.gastosFijos" etc en todos lados, desestructuro las propiedades del objeto costos

  function handleChange(event) {
    const { name, value } = event.target;

    setCostos((prevCostos) => ({
      ...prevCostos, // Copio los otros valores que no son dinámicos
      [name]: Number(value), // Lo convierto a número usando Number porque los inputs devuelven texto
    }));
  }

  const horasMensuales = horasTrabajo * 4.33;
  const gastosConImprevistos =
    (salarioDeseado + gastosFijos) * (1 + porcentajeImprevistos / 100);
  const valorHora =
    horasMensuales > 0 ? gastosConImprevistos / horasMensuales : 0;

  return (
    <div>
      <h1>Calculadora Freelancer</h1>
      <FormularioCostos costos={costos} handleChange={handleChange} />
      <ResultadoTarifa valorHora={valorHora} />
    </div>
  );
}

export default App;
