export default function TerminadoArriendo() {
  return (
    <>
      <div className="container mt-4">
        <h2>Ver Arriendos Terminados</h2>

        <div className="card shadow mb-4">
          <div className="card-header bg-secondary text-white">
            Arriendos Terminados
          </div>
          <div className="card-body">
            <p>Estos arriendos ya han sido finalizados:</p>
            <ul className="list-group">
              <li className="list-group-item">
                #010 - Cliente: Pablo Díaz - Vehículo: QWER89 - Finalizado el: 17/12/2004
              </li>
              <li className="list-group-item">
                #011 - Cliente: Ana Torres - Vehículo: ZXC123 - Finalizado el: 21/06/2025
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
