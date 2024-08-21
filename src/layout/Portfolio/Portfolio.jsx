import React, { useState } from "react";
import bannerImage from '../../assets/banner/banner.jpg';
import './Portfolio.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faReact, faSass, faJsSquare, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faArrowTrendUp, faTimes } from "@fortawesome/free-solid-svg-icons";


import bookiImage from '../../assets/portfolio/booki.png';
import NinaPicture from '../../assets/portfolio/nina_carducci.PNG';
import KasaPicture from '../../assets/portfolio/kasa.PNG';
import PixPicture from '../../assets/portfolio/pixetmotion.PNG';
import PixTournament from '../../assets/portfolio/pixtournament.PNG';
import LufyDoom from '../../assets/portfolio/lufydoom.PNG';

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", description: "", image: "", url: "" });

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const cardsData = [
    {
      id: 1,
      image: `${bookiImage}`,
      title: "Booki",
      description:
       `
      Dans le cadre de la formation OpenClassRooms, j'ai développé le site web de l'agence Booki (Site Fictif). 
      Le projet visait à créer un site entièrement responsive, adapté à tous types de dispositifs, des grands écrans aux smartphones,
      afin d'assurer une expérience utilisateur optimale sur tous les appareils.
      `,
      icons: [faHtml5, faCss3Alt],
      url: "https://hellfire44.github.io/Booki_EG/",
    },
    {
      id: 2,
      image: `${NinaPicture}`,
      title: "Nina Carducci",
      description:
      `
      Pour le site de Nina Carducci, j'ai effectué une optimisation complète qui a significativement amélioré les performances, 
      l'accessibilité, et le référencement. J'ai travaillé sur l'optimisation des images, du code, et des ressources, tout en renforçant 
      l'accessibilité et le SEO, notamment en intégrant le balisage Schema.org pour un meilleur référencement local. 
      J'ai aussi optimisé les métadonnées pour les réseaux sociaux et corrigé divers bugs. 
      Ces interventions ont conduit à une amélioration notable de l'expérience utilisateur et de la visibilité en ligne du site.
      `,
      icons: [faHtml5, faCss3Alt, faJsSquare, faArrowTrendUp],
      url: "https://hellfire44.github.io/nina-carducci/",
    },
    {
      id: 3,
      image: `${KasaPicture}`,
      title: "Kasa",
      description: "Description du projet 3.",
      icons: [faReact, faSass, faHtml5],
      url: "https://github.com/HellFire44/kasa",
    },
    {
        id: 4,
        image: `${PixPicture}`,
        title: "Pix&Motion",
        description: "Description du projet 3.",
        icons: [faWordpress, faArrowTrendUp],
        url: "https://lespixionautes.fr/",
    },
    {
        id: 5,
        image: `${PixTournament}`,
        title: "Pix&Motion Tournament",
        description: "Description du projet 3.",
        icons: [faReact, faSass, faArrowTrendUp],
        url: "https://lespixionautes-tournament.fr/",
      },  
      {
        id: 6,
        image: `${LufyDoom}`,
        title: "LufyDoom Coaching",
        description: "Description du projet 3.",
        icons: [faHtml5, faCss3Alt, faArrowTrendUp],
        url: "https://lufydoomcoaching.com/",
      },
    // Ajoutez d'autres cartes ici
  ];

  return (
    <div id="myportfolio" className="portfolio">
      <div className="banner-container">
        <img className="banner" src={bannerImage} alt="Section A propos de moi" />
        <h1 className="banner-title">Portfolio</h1>
        <p className="banner-text">
          Vous trouverez ci-dessous divers exemples de projet réalisés au cours de ma formation ainsi que d'autres initiatives professionnelles.
        </p>
      </div>

      <div className="card-container">
        {cardsData.map((card) => (
          <div className="card1" key={card.id}>
            <img src={card.image} alt={card.title} className="card-image" />
            <h3 className="card-title">{card.title}</h3>
            <div className="card-icons">
              {card.icons.map((icon, index) => (
                <FontAwesomeIcon key={index} icon={icon} />
              ))}
            </div>
            <button
              className="see-more-button"
              onClick={() => openModal({ title: card.title, description: card.description, image: card.image, url: card.url })}
            >
              Voir plus
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <img src={modalContent.image} alt={modalContent.title} className="modal-image" />
            <h2>{modalContent.title}</h2>
            <p>{modalContent.description}</p>
            <a href={modalContent.url} target="_blank" rel="noopener noreferrer">
              <button className="redirect-button">Redirection</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
