import "./styles.css";
import background from "../../assets/images/statique-background.jpg";
import React from "react";
import { useState, useEffect } from "react";

function HomeSection() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Développeur Web", "Adepte de nouvelles technologies","Fan de domotique","Gamer dans l'âme"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;


  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
   },delta)
   
    return () => { clearInterval(ticker)};
 } , [text])

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
         setDelta(prevDelta => prevDelta /2)
      }

      if (!isDeleting && updatedText === fullText) {
         setIsDeleting(true);
         setDelta(period)
                } else if (isDeleting && updatedText === ''){
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setDelta(200);
               }
    }

  return (
    <section className="HomeSection" id="/">
      <div className="statique-background-container">
        <div className="home-page">
          <img className="bg opacity" src={background} alt="background" />
        </div>
      </div>

      <div className="bigHeader-container">
        <p className="bigHeader__p1">Bonjour, mon nom est</p>
        <h1>Maxime Camaille</h1>
        <h2 className="wrap">{text}<span className="clignotement"></span></h2>
        <p className="bigHeader__p2">
          Je suis développeur web Frontend avec une spécialisation en ReactJS,
          et j'ai également de bonnes notions en Backend avec Laravel et MySQL.
          J'aime que les applications web que je développe, soit agréable à
          utiliser et à regarder (UX/UI).
        </p>
        <button
          onClick={() => {
            console.log("test bouton");
          }}
        >
          Me contacter
          <span class="material-symbols-outlined">arrow_circle_right</span>
        </button>
        <div class='icon-scroll'></div>
      </div>
    </section>
  );
}

export default HomeSection;
