import React from 'react';
import Typewriter from '../../components/TypeWriter/TypeWriter';
import './Accueil.scss';

const Accueil = () => {
  return (
    <section id='home' className="accueil">
        <h1 className="title-accueil">
          <Typewriter text="Vous recherchez un développeur Web ?" speed={100} />
        </h1>
      <p className="texte-accueil">
        <Typewriter
          text={`Ça tombe bien ! Je suis passionné par la création de sites web innovants et fonctionnels.
          Avec une solide expertise en développement et un souci constant du détail, je suis déterminé à transformer vos idées en réalité numérique.
          Que vous ayez besoin d'un site élégant, d'une solution technique sur mesure ou d'une optimisation efficace, je suis là pour vous accompagner à chaque étape.
          Ensemble, faisons de votre projet web un succès !`}
          speed={30}
          delay={4000} 
        />
      </p>
    </section>
  );
};

export default Accueil;
