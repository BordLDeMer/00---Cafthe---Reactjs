import React, { useState } from "react";

const DeliveryOptions = () => {
  const [selectedDelivery, setSelectedDelivery] = useState(null);

  const handleDeliveryChange = (option) => {
    setSelectedDelivery(option);
  };

  return (
    <div className="delivery-options">
      <h3 className="text-lg font-semibold mb-4">
        Choisissez votre mode de livraison
      </h3>

      <div className="space-y-4">
        <label
          className={`
            flex items-center p-4 border rounded-lg cursor-pointer 
            transition-all duration-300 
            ${
              selectedDelivery === "standard"
                ? "bg-blue-50 border-blue-300"
                : "bg-white border-gray-200 hover:bg-gray-50"
            }
          `}
        >
          <input
            type="radio"
            name="delivery"
            value="standard"
            checked={selectedDelivery === "standard"}
            onChange={() => handleDeliveryChange("standard")}
            className="mr-3 accent-blue-600"
          />
          <div>
            <h4 className="font-medium">Livraison Standard</h4>
            <p className="text-sm text-gray-600">
              Livraison sous 3-5 jours ouvrables
            </p>
            <span className="text-sm font-bold text-gray-800">Gratuit</span>
          </div>
        </label>

        <label
          className={`
            flex items-center p-4 border rounded-lg cursor-pointer 
            transition-all duration-300 
            ${
              selectedDelivery === "express"
                ? "bg-blue-50 border-blue-300"
                : "bg-white border-gray-200 hover:bg-gray-50"
            }
          `}
        >
          <input
            type="radio"
            name="delivery"
            value="express"
            checked={selectedDelivery === "express"}
            onChange={() => handleDeliveryChange("express")}
            className="mr-3 accent-blue-600"
          />
          <div>
            <h4 className="font-medium">Livraison Express</h4>
            <p className="text-sm text-gray-600">
              Livraison sous 1-2 jours ouvrables
            </p>
            <span className="text-sm font-bold text-green-600">+ 9,90 €</span>
          </div>
        </label>
      </div>

      {selectedDelivery && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm">
            Vous avez sélectionné :
            <span className="font-bold ml-2">
              {selectedDelivery === "standard"
                ? "Livraison Standard"
                : "Livraison Express"}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default DeliveryOptions;
