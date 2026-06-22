function FormularioCostos() {
  return (
    <form>
      <div>
        <label htmlFor="salario-deseado">Salario Deseado:</label>
        <input type="number" id="salario-deseado" min="0" />
      </div>
      <div>
        <label htmlFor="gastos-fijos">Gastos Fijos Mensuales:</label>
        <input type="number" id="gastos-fijos" min="0" />
      </div>
      <div>
        <label htmlFor="horas-trabajo">Horas de Trabajo:</label>
        <input type="number" id="horas-trabajo" min="0" />
      </div>
      <div>
        <label htmlFor="porcentaje-imprevistos">
          Porcentaje de Imprevistos:
        </label>
        <input type="number" id="porcentaje-imprevistos" min="0" />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioCostos;
