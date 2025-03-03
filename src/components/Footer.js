import {Link} from "react-router-dom";
import React, { useState } from 'react';

function Footer(props) {
  return (
      <div>
          <h1>Nos promotions du moment</h1>

          <button><Link to="/mentions-legales">Mentions Légales</Link></button>
      </div>
  );
}

export default Footer;


