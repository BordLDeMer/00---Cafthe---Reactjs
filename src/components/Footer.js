import React from "react";
import {Link} from "react-router-dom";

function Footer(props) {
  return (
      <div>
          <h1>Footer</h1>

          <button><Link to="/mentions-legales">Mentions Légales</Link></button>
      </div>
  );
}

export default Footer;
