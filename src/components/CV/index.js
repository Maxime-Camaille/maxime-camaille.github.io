import "./styles.css";
import React from "react";

function CV() {
  return (
   <div className="wrap-section-CV">

    <section className="card-CV">
      <div className="card-body">
        <h5 className="card-title">Profil Linkedin</h5>
        <p className="card-text">
          Vous souhaitez consulter mon parcours professionnel sur Linkedin cliquer sur le lien ci-dessous :
        </p>
        <a href="https://www.linkedin.com/in/maxime-camaille/" target="blank" className="btn btn-primary">Voir le profil Linkedin de Maxime</a>
      </div>
    </section>

    <section className="card-CV">
      <div className="card-body">
        <h5 className="card-title">Profil Linkedin</h5>
        <p className="card-text">
          Vous souhaitez consulter mon parcours professionnel sur Linkedin cliquer sur le lien ci-dessous :
        </p>
        <a href="https://www.linkedin.com/in/maxime-camaille/" target="blank" className="btn btn-primary">Voir le profil Linkedin de Maxime</a>
      </div>
    </section>

   </div>
  );
}

export default CV;
