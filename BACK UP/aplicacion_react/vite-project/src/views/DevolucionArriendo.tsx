export default function DevolucionArriendo() {
  return (
    <>
      <div className="container mt-4">
        <div className="card shadow mb-4">
          <div className="card-header bg-success text-white">
            <h5 className="mb-0">Arriendos Activos</h5>
          </div>
          <div className="card-body">
            <p>A continuación se listan los arriendos que están actualmente activos:</p>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                #001 - Cliente: Juan Pérez - Vehículo: ABCD12
                <a href="devolucion.html" className="btn btn-sm btn-danger">
                  Registrar devolución
                </a>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                #002 - Cliente: María López - Vehículo: XYZZ45
                <a href="devolucion.html" className="btn btn-sm btn-danger">
                  Registrar devolución
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
