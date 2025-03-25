import React, { useState } from "react";
import "../styles/DeliveryOptions.css";

const DeliveryOptions = () => {
  const [selectedDelivery, setSelectedDelivery] = useState(null);

  const handleDeliveryChange = (option) => {
    setSelectedDelivery(option);
  };

  return (
    <div className="delivery-options">
      <h3>Choisissez votre mode de livraison</h3>

      <div className="delivery-choices">
        <label
          className={`delivery-option ${selectedDelivery === "standard" ? "selected" : ""}`}
        >
          <input
            type="radio"
            name="delivery"
            value="standard"
            checked={selectedDelivery === "standard"}
            onChange={() => handleDeliveryChange("standard")}
          />
          <div className="delivery-info">
            <h4>Retrait en Magasin</h4>
            <p>Récupérez vos produits pendant les heures d'ouvertures</p>
            <span className="price">Gratuit</span>
          </div>
        </label>

        <label
          className={`delivery-option ${selectedDelivery === "express" ? "selected" : ""}`}
        >
          <input
            type="radio"
            name="delivery"
            value="express"
            checked={selectedDelivery === "express"}
            onChange={() => handleDeliveryChange("express")}
          />
          <div className="delivery-info">
            <h4>Livraison Express</h4>
            <p>Livraison sous 1-2 jours ouvrables</p>
            <span className="price express">+ 9,90 €</span>
          </div>
        </label>
      </div>

      {selectedDelivery && (
        <div className="delivery-confirmation">
          <p>
            Vous avez sélectionné :
            <span className="selected-option">
              {selectedDelivery === "standard"
                ? "Retrait en Magasin"
                : "Livraison Express"}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default DeliveryOptions;
