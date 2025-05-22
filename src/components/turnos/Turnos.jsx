import React from 'react';
import { InlineWidget } from 'react-calendly';
import './Turnos.css';

const Turnos = () => {
  return (
    <div className="turnos-container">
      <h2>Agenda tu Turno</h2>
      <div className="calendly-container">
        <InlineWidget
          url="https://calendly.com/cristianalcaraz" // Tu URL de Calendly
          styles={{
            height: '700px',
            width: '100%',
            minWidth: '320px'
          }}
          prefill={{}}
          pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: '00a2ff',
            textColor: '4d5055'
          }}
          locale="es" // Configura el idioma en español
        />
      </div>
    </div>
  );
};

export default Turnos;