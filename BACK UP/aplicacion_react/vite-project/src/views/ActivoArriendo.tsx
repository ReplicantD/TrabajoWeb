export default function ActivoArriendo() {
  return (
    <>
      <div className="container mt-4">
        <h2>Ver Arriendos Activos</h2>

        <div className="card">
          <div className="card-header bg-success text-white">
            Arriendos Activos
          </div>
          <div className="card-body">
            <p>A continuación se listan los arriendos que están actualmente activos:</p>
            <ul className="list-group">
              <li className="list-group-item">
                #001 - Cliente: Juan Pérez - Vehículo: ABCD12
              </li>
              <li className="list-group-item">
                #002 - Cliente: María López - Vehículo: XYZZ45
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
