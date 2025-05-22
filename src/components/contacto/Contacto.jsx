import React, { useState } from 'react';
import "./Contacto.css";
import Mapa from './Mapa';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    // Aquí podrías enviar los datos a una API, por ejemplo
  };

  return (
    <div className="contacto-container">
      <div className="contacto-content">
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <h2>Contacto</h2>
            <div className="form-group">
              <label>
                Nombre:
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Ingrese su nombre"
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Apellido:
                <input
                  type="text"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  required
                  placeholder="Ingrese su apellido"
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Correo:
                <input
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                  placeholder="Ingrese su correo electrónico"
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Mensaje:
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  placeholder="Escriba su mensaje aquí..."
                  rows={5}
                  style={{ resize: 'none' }}
                />
              </label>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="map-section">
          <Mapa />
        </div>
      </div>
    </div>
  );
}
export default Contacto;
