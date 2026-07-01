function ResultadoTarifa({ valorHora }) {
  const tarifaFormateada = new Intl.NumberFormat("es-UY", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(valorHora);

  return (
    <div className="resultado-card">
      <span className="resultado-label">Tu tarifa por hora sugerida:</span>

      <div className="resultado-monto">
        <span className="resultado-simbolo">$</span>
        <span className="resultado-numero">{tarifaFormateada}</span>
      </div>
      <span className="resultado-footer">
        basado en tus costos y metas mensuales
      </span>
    </div>
  );
}

export default ResultadoTarifa;
