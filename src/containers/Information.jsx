import React from 'react';
import '../styles/components/Information.css';

const Information = () => (
  <div className="Information">
    <div className="Information-content">
      <div className="Information-head">
        <h2>Información de contacto:</h2>
      </div>
      <div className="Information-form">
        <form action="">
          <input type="text" placeholder="Nombre completo" name="name" />
          <input type="text" placeholder="Correo Electrónico" name="email" />
          <input type="text" placeholder="Direccion" name="address" />
          <input type="text" placeholder="Apto" name="apto" />
          <input type="text" placeholder="ciudad" name="city" />
          <input type="text" placeholder="País" name="country" />
          <input type="text" placeholder="Estado" name="state" />
          <input type="text" placeholder="Código Postal" name="cp" />
          <input type="text" placeholder="Teléfoco" name="phone" />
        </form>
        <div className="Information-buttons">
          <div className="Information-back">Regresar</div>
          <div className="Information-next">Pagar</div>
        </div>
      </div>
    </div>
    <div className="Information-sidebar">
      <h3>Pedido:</h3>
      <div className="Information-item">
        <div className="information-element">
          <h4>ITEM Name</h4>
          <span>$10</span>
        </div>
      </div>
    </div>
  </div>
)

export default Information;
