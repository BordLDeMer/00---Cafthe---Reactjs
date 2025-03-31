import React from "react";

function MentionsLegales() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        lineHeight: "1.6",
      }}
    >
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>
        Mentions Légales
      </h1>

      <div>
        <h2
          style={{ fontSize: "20px", marginTop: "20px", marginBottom: "10px" }}
        >
          1. Identité de l'entreprise
        </h2>
        <p>Raison sociale : [Nom de votre entreprise]</p>
        <p>Forme juridique : [SARL, SAS, SA, Entreprise individuelle, etc.]</p>
        <p>Capital social : [Montant du capital social]</p>
        <p>Numéro SIRET : [Votre numéro SIRET]</p>
        <p>Numéro RCS : [Votre numéro RCS et ville d'immatriculation]</p>
        <p>Numéro de TVA intracommunautaire : [Votre numéro de TVA]</p>
        <p>Adresse du siège social : [Adresse complète]</p>
        <p>Téléphone : [Numéro de téléphone]</p>
        <p>Email : [Adresse email de contact]</p>

        <h2
          style={{ fontSize: "20px", marginTop: "20px", marginBottom: "10px" }}
        >
          2. Direction de la publication
        </h2>
        <p>Directeur de la publication : [Nom et prénom du directeur]</p>
        <p>Fonction : [Fonction du directeur dans l'entreprise]</p>
        <p>Email : [Email professionnel du directeur]</p>

        <h2
          style={{ fontSize: "20px", marginTop: "20px", marginBottom: "10px" }}
        >
          3. Hébergement du site
        </h2>
        <p>Société d'hébergement : [Nom de l'hébergeur]</p>
        <p>Adresse : [Adresse complète de l'hébergeur]</p>
        <p>Téléphone : [Numéro de téléphone de l'hébergeur]</p>

        <h2
          style={{ fontSize: "20px", marginTop: "20px", marginBottom: "10px" }}
        >
          4. Propriété intellectuelle
        </h2>
        <p>
          Tous les contenus présents sur ce site (textes, images, logos, vidéos,
          etc.) sont protégés par le droit d'auteur et sont la propriété
          exclusive de [Nom de votre entreprise] ou de ses partenaires. Toute
          reproduction, représentation, modification, publication ou adaptation,
          totale ou partielle, des éléments du site est strictement interdite
          sans autorisation préalable.
        </p>

        <h2
          style={{ fontSize: "20px", marginTop: "20px", marginBottom: "10px" }}
        >
          5. Données personnelles et RGPD
        </h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données
          (RGPD), vous disposez d'un droit d'accès, de rectification,
          d'effacement et de portabilité de vos données personnelles, ainsi que
          d'un droit d'opposition et de limitation du traitement. Pour exercer
          ces droits, veuillez nous contacter à l'adresse suivante : [Email
          dédié RGPD].
        </p>

        <h3
          style={{ fontSize: "18px", marginTop: "15px", marginBottom: "10px" }}
        >
          5.1 Collecte des données
        </h3>
        <p>Nous collectons les données suivantes :</p>
        <p>
          [Liste des données collectées : ex. nom, prénom, email, adresse, etc.]
        </p>
        <p>
          Finalité de la collecte : [Préciser pourquoi vous collectez ces
          données]
        </p>
        <p>
          Durée de conservation : [Préciser la durée de conservation des
          données]
        </p>

        <h3
          style={{ fontSize: "18px", marginTop: "15px", marginBottom: "10px" }}
        >
          5.2 Utilisation des cookies
        </h3>
        <p>
          Notre site utilise des cookies pour [préciser la finalité : améliorer
          l'expérience utilisateur, analyser le trafic, etc.]. Vous pouvez à
          tout moment désactiver ces cookies dans les paramètres de votre
          navigateur.
        </p>

        <h2
          style={{ fontSize: "20px", marginTop: "20px", marginBottom: "10px" }}
        >
          6. Conditions Générales de Vente (CGV)
        </h2>
        <p>
          Les CGV complètes sont disponibles [lien vers les CGV]. Elles
          définissent les modalités de vente entre [Nom de l'entreprise] et ses
          clients.
        </p>

        <h2
          style={{ fontSize: "20px", marginTop: "20px", marginBottom: "10px" }}
        >
          7. Droit applicable et juridiction compétente
        </h2>
        <p>
          Le présent site et ses mentions légales sont soumis au droit français.
          En cas de litige, les tribunaux de [ville du siège social] seront
          seuls compétents.
        </p>

        <h2
          style={{ fontSize: "20px", marginTop: "20px", marginBottom: "10px" }}
        >
          8. Médiation de la consommation
        </h2>
        <p>
          Conformément aux dispositions du Code de la consommation concernant le
          règlement amiable des litiges, [Nom de l'entreprise] adhère au service
          du médiateur suivant : [Nom et coordonnées du médiateur].
        </p>

        <h2
          style={{ fontSize: "20px", marginTop: "20px", marginBottom: "10px" }}
        >
          9. Dernière mise à jour
        </h2>
        <p>
          Ces mentions légales ont été mises à jour le [date de la dernière mise
          à jour].
        </p>
      </div>
    </div>
  );
}

export default MentionsLegales;
