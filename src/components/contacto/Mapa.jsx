import React from 'react';

function Mapa() {
  return (
    <div className='map-section'>
      <iframe
        title="Mapa de Google"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201.408103402372!2d-64.29711992436965!3d-36.6406316679075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c2ccf75f42f64f%3A0x8c664783b04144f!2sFerrando%20L.%201437%2C%20L1437%20Santa%20Rosa%2C%20La%20Pampa!5e0!3m2!1ses-419!2sar!4v1747668186098!5m2!1ses-419!2sar"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default Mapa;
