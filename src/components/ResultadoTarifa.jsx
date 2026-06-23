function ResultadoTarifa({ valorHora }) {
  return (
    <div className="resultado-card">
      <span className="resultado-label">Tu tarifa por hora sugerida:</span>

      <div className="resultado-monto">
        <span className="resultado-simbolo">$</span>
        <span className="resultado-numero">{valorHora.toFixed(2)}</span>
      </div>
      <span className="resultado-footer">
        basado en tus costos y metas mensuales
      </span>
    </div>
  );
}

export default ResultadoTarifa;
