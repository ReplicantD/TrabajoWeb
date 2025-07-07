export default function NuevoArriendo() {
  return (
    <>
      <div className="container mt-4">
        <h2>Registrar un Nuevo Arriendo</h2>

        <div className="card">
          <div className="card-header bg-primary text-white">
            Registrar Nuevo Arriendo
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="rutCliente" className="form-label">
                  RUT del Cliente
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="rutCliente"
                  name="rutCliente"
                  placeholder="Ej: 12345678-9"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="patenteVehiculo" className="form-label">
                  Patente del Vehículo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="patenteVehiculo"
                  name="patenteVehiculo"
                  placeholder="Ej: ABCD12"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="tipoVehiculo" className="form-label">
                  Tipo de Vehículo
                </label>
                <select
                  className="form-select"
                  id="tipoVehiculo"
                  name="tipoVehiculo"
                  required
                >
                  <option value="">Elige uno</option>
                  <option value="Auto">Sedan</option>
                  <option value="Camioneta">Camioneta</option>
                  <option value="SUV">SUV</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="nombreCliente" className="form-label">
                  Nombre Cliente
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreCliente"
                  name="nombreCliente"
                  required
                  placeholder="Ej: El Etechet"
                />
              </div>

              <input type="hidden" id="fecha_inicio" name="fecha_inicio" />

              <button type="submit" className="btn btn-success">
                Registrar Arriendo
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

