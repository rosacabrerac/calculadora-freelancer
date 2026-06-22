function FormularioCostos({ costos, handleChange }) {
  return (
    <form>
      <div>
        <label htmlFor="salarioDeseado">Salario Deseado:</label>
        <input
          type="number"
          id="salarioDeseado"
          min="0"
          name="salarioDeseado"
          value={costos.salarioDeseado}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="gastosFijos">Gastos Fijos Mensuales:</label>
        <input
          type="number"
          id="gastosFijos"
          min="0"
          name="gastosFijos"
          value={costos.gastosFijos}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="horasTrabajo">Horas de Trabajo:</label>
        <input
          type="number"
          id="horasTrabajo"
          min="0"
          name="horasTrabajo"
          value={costos.horasTrabajo}
          onChange={handleChange}
        />
      </div>
      <div>
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
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioCostos;
