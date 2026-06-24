import { useState } from "react";
import FormularioCostos from "./components/FormularioCostos";
import ResultadoTarifa from "./components/ResultadoTarifa";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [datosCalculados, setDatosCalculados] = useState(() => {
    const datos_calculadora = localStorage.getItem("clave");
    if (datos_calculadora !== null) {
      return JSON.parse(datos_calculadora);
    } else {
      return {
        conectividadServicios: 2000,
        suscripcionesSoftware: 300,
        espacioAlquiler: 8000,
        salarioDeseado: 60000,
        ahorroMensual: 10000,
        porcentajeImprevistos: 3,
        horasSemanales: 40,
        vacacionesSemanas: 3,
      };
    }
  });

  useEffect(() => {
    const stringDatosCalculados = JSON.stringify(datosCalculados);
    localStorage.setItem("clave", stringDatosCalculados);
  }, [datosCalculados]);

  const {
    salarioDeseado,
    porcentajeImprevistos,
    horasSemanales,
    conectividadServicios,
    suscripcionesSoftware,
    espacioAlquiler,
    ahorroMensual,
    vacacionesSemanas,
  } = datosCalculados; // Para no escribir "costos.salarioDeseado, costos.gastosFijos" etc en todos lados, desestructuro las propiedades del objeto costos

  function handleChange(event) {
    const { name, value } = event.target;

    setDatosCalculados((prevDatosCalculados) => ({
      ...prevDatosCalculados, // Copio los otros valores que no son dinámicos
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
      <FormularioCostos
        datosCalculados={datosCalculados}
        handleChange={handleChange}
      />
      <section>
        <ResultadoTarifa valorHora={valorHora} />
      </section>
    </main>
  );
}

export default App;
