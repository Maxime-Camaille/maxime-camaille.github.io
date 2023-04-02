import "./styles.css";
import React from "react";
function About() {
  return (
    <section className="about-wrap" id="about">
      <h3>À propos</h3>
      <div className="card">
        <div className="cardDescription">
          <p>
            Fan de <span>domotique</span>, adepte de <span>nouvelles technologies</span> et un peu gamer
            dans l'âme.
          </p>

          <p>
            On me décrit souvent comme quelqu'un d'enthousiaste, très sociable,
            intègre et déterminé.
          </p>

          <p>
            Suite à une expérience enrichissante en tant que diagnostiqueur
            mesureur dans le secteur du bâtiment, j'ai pris la décision de faire
            une reconversion professionnel afin de m'épanouir dans un nouveau
            domaine. J'ai donc réalisé un bilan de compétences, d'où en est
            ressorti ma passion pour la technologie et le numérique.
            Naturellement, le métier de <span>developpeur web</span> s'est révélé.
          </p>
          <p>
            Je peux maintenant dire que je m'épanouis pleinement dans ce que
            j'entreprend.
          </p>
          <p>
            Je suis impatient de mettre à profit tout ce que j'ai appris et à 
             <span> découvrir</span> d'avantage.
          </p>
        </div>
        <div className="cardPicture">
          <div class="Picture">
            <div className="cercle" />
            <div class="front-face">
              <div class="contents front">
                <p>Maxime Camaille</p>
                <span>Evreux, France</span>
              </div>
            </div>
            <div class="back-face">
              <div class="contents back">
                <h4>Me contacter</h4>
                <a
                  className="mail-link"
                  href="mailto:maxime.camaille@gmail.com"
                >
                  maxime.camaille@gmail.com
                </a>
                <p>06 70 90 68 57</p>
                <div class="icons">
                  <a
                    class="fab fa-linkedin-in"
                    href="https://www.linkedin.com/in/maxime-camaille/"
                    // eslint-disable-next-line
                    target="_blank"
                  >
                    in
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="identity">
          <div ClassName="identity-tip"><span>🎂</span><p> 30 ans</p></div>
          <div ClassName="identity-tip"><span>💍</span><p> marié</p></div>
          <div ClassName="identity-tip"><span>🍼 </span><p> papa d'un petit garçon</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
