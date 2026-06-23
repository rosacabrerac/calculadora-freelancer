function FormularioCostos({ costos, handleChange }) {
  return (
    <form>
      <fieldset>
        <legend>Costos Fijos</legend>
        <label htmlFor="conectividadServicios">Conectividad y Servicios:</label>
        <input
          type="number"
          id="conectividadServicios"
          min="0"
          name="conectividadServicios"
          value={costos.conectividadServicios}
          onChange={handleChange}
        />

        <label htmlFor="suscripcionesSoftware">Suscripciones y Software:</label>
        <input
          type="number"
          id="suscripcionesSoftware"
          min="0"
          name="suscripcionesSoftware"
          value={costos.suscripcionesSoftware}
          onChange={handleChange}
        />

        <label htmlFor="espacioAlquiler">Espacio de Trabajo / Alquiler:</label>
        <input
          type="number"
          id="espacioAlquiler"
          min="0"
          name="espacioAlquiler"
          value={costos.espacioAlquiler}
          onChange={handleChange}
        />
      </fieldset>

      <fieldset>
        <legend>Metas Financieras</legend>
        <label htmlFor="salarioDeseado">Salario Deseado:</label>
        <input
          type="number"
          id="salarioDeseado"
          min="0"
          name="salarioDeseado"
          value={costos.salarioDeseado}
          onChange={handleChange}
        />

        <label htmlFor="ahorroMensual">Ahorro Mensual:</label>
        <input
          type="number"
          id="ahorroMensual"
          min="0"
          name="ahorroMensual"
          value={costos.ahorroMensual}
          onChange={handleChange}
        />

        <label htmlFor="porcentajeImprevistos">
          Porcentaje de Imprevistos:
        </label>
        <input
          type="number"
          id="porcentajeImprevistos"
          min="0"
          name="porcentajeImprevistos"
          value={costos.porcentajeImprevistos}
          onChange={handleChange}
        />
      </fieldset>

      <fieldset>
        <legend>Tiempo Disponible</legend>
        <label htmlFor="horasSemanales">Horas de Trabajo Semanales:</label>
        <input
          type="number"
          id="horasSemanales"
          min="0"
          name="horasSemanales"
          value={costos.horasSemanales}
          onChange={handleChange}
        />

        <label htmlFor="vacacionesSemanas">Semanas de Vacaciones al Año:</label>
        <input
          type="number"
          id="vacacionesSemanas"
          min="0"
          name="vacacionesSemanas"
          value={costos.vacacionesSemanas}
          onChange={handleChange}
        />
      </fieldset>
    </form>
  );
}

export default FormularioCostos;
