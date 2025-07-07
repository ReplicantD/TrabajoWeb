export default function EstadisticaArriendo() {
  return (
    <>
      <div className="container mt-4">
        <h2>Ver Estadísticas de Arriendos</h2>

        <div className="card">
          <div className="card-header bg-dark text-white">
            Estadísticas de Arriendos
          </div>

          <div className="card-body">
            <p>Resumen de arriendos por tipo de vehículo:</p>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Sedán
                <span className="badge bg-primary rounded-pill">34</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                SUV
                <span className="badge bg-success rounded-pill">8</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Camionetas
                <span className="badge bg-warning rounded-pill">5</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
