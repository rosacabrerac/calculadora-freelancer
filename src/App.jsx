import { useState } from "react";
import FormularioCostos from "./components/FormularioCostos";
import ResultadoTarifa from "./components/ResultadoTarifa";

function App() {
  const [costos, setCostos] = useState({
    conectividadServicios: 0,
    suscripcionesSoftware: 0,
    espacioAlquiler: 0,
    salarioDeseado: 0,
    ahorroMensual: 0,
    porcentajeImprevistos: 0,
    horasSemanales: 0,
    vacacionesSemanas: 0,
  }); // Le paso a useState el objeto con los valores iniciales en cero, desestructurando el array que devuelve useState y así obtengo la variable contenedora (costos)

  const {
    salarioDeseado,
    porcentajeImprevistos,
    horasSemanales,
    conectividadServicios,
    suscripcionesSoftware,
    espacioAlquiler,
    ahorroMensual,
    vacacionesSemanas,
  } = costos; // Para no escribir "costos.salarioDeseado, costos.gastosFijos" etc en todos lados, desestructuro las propiedades del objeto costos

  function handleChange(event) {
    const { name, value } = event.target;

    setCostos((prevCostos) => ({
      ...prevCostos, // Copio los otros valores que no son dinámicos
      [name]: Number(value), // Lo convierto a número usando Number porque los inputs devuelven texto
    }));
  }

  const semanasLaborales = 52 - vacacionesSemanas;
  const horasAnuales = horasSemanales * semanasLaborales;
  const horasMensualesPromedio = horasAnuales / 12;
  const costosFijosMensuales =
    conectividadServicios + suscripcionesSoftware + espacioAlquiler;
  const metasMensuales = salarioDeseado + ahorroMensual;
  const presupuestoMensualRequerido =
    (costosFijosMensuales + metasMensuales) * (1 + porcentajeImprevistos / 100);
  const valorHora =
    horasMensualesPromedio > 0
      ? presupuestoMensualRequerido / horasMensualesPromedio
      : 0;

  return (
    <main>
      <h1>Calculadora Freelancer</h1>
      <FormularioCostos costos={costos} handleChange={handleChange} />
      <section>
        <ResultadoTarifa valorHora={valorHora} />
      </section>
    </main>
  );
}

export default App;
