import React, { useState, useEffect } from "react";
import "./Turnos.css";

const ADMIN_KEY = "admin123"; // Puedes cambiar la clave aquí

const Turnos = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [turnos, setTurnos] = useState([]);
  const [error, setError] = useState("");
  const [adminInput, setAdminInput] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  // Leer turnos de localStorage al iniciar
  useEffect(() => {
    const stored = localStorage.getItem("turnos");
    if (stored) {
      setTurnos(JSON.parse(stored));
    }
  }, []);

  // Guardar turnos en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("turnos", JSON.stringify(turnos));
  }, [turnos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const existe = turnos.some(
      (t) => t.fecha === fecha && t.hora === hora
    );
    if (existe) {
      setError("Ya existe un turno reservado en esa fecha y hora.");
      return;
    }

    setTurnos([
      ...turnos,
      { nombre, telefono, fecha, hora }
    ]);
    setNombre("");
    setTelefono("");
    setFecha("");
    setHora("");
    setError("");
  };

  const handleAdminLogin = () => {
    if (adminInput === ADMIN_KEY) {
      setIsAdmin(true);
      setAdminInput("");
    } else {
      alert("Clave incorrecta");
    }
  };

  const handleDelete = (idx) => {
    if (!isAdmin) return;
    const nuevosTurnos = [...turnos];
    nuevosTurnos.splice(idx, 1);
    setTurnos(nuevosTurnos);
  };

  return (
    <div className="turnos-container">
      <h1>Reserva tu Turno</h1>
      <div className="turnos-content">
        <form className="turnos-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
          />
          <button type="submit">Reservar</button>
        </form>
        {error && <div className="turnos-error">{error}</div>}

        {/* Sección de acceso de administrador */}
        {!isAdmin && (
          <div className="admin-login">
            <input
              type="password"
              placeholder="Clave de administrador"
              value={adminInput}
              onChange={(e) => setAdminInput(e.target.value)}
            />
            <button type="button" onClick={handleAdminLogin}>
              Ingresar como admin
            </button>
          </div>
        )}

        <h2>Turnos Reservados</h2>
        <ul className="turnos-lista">
          {turnos.map((turno, idx) => (
            <li key={idx}>
              <strong>{turno.nombre}</strong> - {turno.telefono} - {turno.fecha} {turno.hora}
              {isAdmin && (
                <button
                  className="eliminar-btn"
                  onClick={() => handleDelete(idx)}
                  style={{ marginLeft: 10 }}
                >
                  Eliminar
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>

      
    </div>


  );
};

export default Turnos;