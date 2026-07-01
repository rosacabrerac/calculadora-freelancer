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

  const datosSanitizados = {
    salarioDeseado: Number(datosCalculados.salarioDeseado) || 0,
    porcentajeImprevistos: Number(datosCalculados.porcentajeImprevistos) || 0,
    horasSemanales: Number(datosCalculados.horasSemanales) || 0,
    conectividadServicios: Number(datosCalculados.conectividadServicios) || 0,
    suscripcionesSoftware: Number(datosCalculados.suscripcionesSoftware) || 0,
    espacioAlquiler: Number(datosCalculados.espacioAlquiler) || 0,
    ahorroMensual: Number(datosCalculados.ahorroMensual) || 0,
    vacacionesSemanas: Number(datosCalculados.vacacionesSemanas) || 0,
  };

  const {
    salarioDeseado,
    porcentajeImprevistos,
    horasSemanales,
    conectividadServicios,
    suscripcionesSoftware,
    espacioAlquiler,
    ahorroMensual,
    vacacionesSemanas,
  } = datosSanitizados; // Para no escribir "datosSanitizados.salarioDeseado, datosSanitizados.gastosFijos" etc en todos lados, desestructuro las propiedades del objeto datosSanitizados

  function handleChange(event) {
    const { name, value } = event.target;

    if (value.length > 8 || value.includes("-")) {
      return;
    }

    setDatosCalculados((prevDatosCalculados) => ({
      ...prevDatosCalculados, // Copio los otros valores que no son dinámicos
      [name]: value, // Lo convierto a número usando Number porque los inputs devuelven texto
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
