import React from "react";

function CommandePassee(props) {
  const { orderNumber, totalAmount } = props;

  return (
    <div className="container mx-auto p-6 text-center">
      <div className="bg-green-100 rounded-lg p-8 max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Merci de votre commande
        </h1>
        {orderNumber && (
          <p className="text-gray-600 mb-2">
            Numéro de commande : {orderNumber}
          </p>
        )}
        {totalAmount && (
          <p className="text-gray-600 font-semibold">
            Montant total : {totalAmount.toLocaleString("fr-FR")} €
          </p>
        )}
        <div className="mt-6">
          <p className="text-sm text-gray-500">
            Nous traitons votre commande avec soin.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommandePassee;
