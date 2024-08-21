import React from "react";
import './AboutMe.scss';
import bannerImage from '../../assets/banner/banner.jpg';
import Profil from '../../assets/profil/photoprofil.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faComment, faBattery } from '@fortawesome/free-solid-svg-icons';

const AboutMe = () => {
    return (
        <div id="aboutme" className="aboutme">
            <div className="banner-container">
                <img className="banner" src={bannerImage} alt="Section A propos de moi" />
                <h1 className="banner-title">À propos de moi</h1>
            </div>

            <div className="aboutme-content">
                <div className="aboutme-left">
                    <img className="aboutme-profil" src={Profil} alt="Profil de Emilien Griffon" />
                </div>
                <div className="aboutme-right">
                    <div className="aboutme-box">
                        <div className="aboutme-box1">
                            <FontAwesomeIcon icon={faPalette} />
                            <p>Créative</p>
                        </div>
                        <div className="aboutme-box2">
                            <FontAwesomeIcon icon={faComment} />
                            <p>Capacité</p>
                        </div>
                        <div className="aboutme-box3">
                            <FontAwesomeIcon icon={faBattery} />
                            <p>Autonome</p>
                        </div>
                    </div>
                    <div className="aboutme-text">
                        <p>
                            Bonjour ! Je suis Emilien Griffon, j'ai 26 ans. Mon parcours professionnel a débuté dans l'usinage où la <br />
                            précision, la rigueur et la technicité étaient mes quotidiens. Ces années en tant que technicien d'usinage <br />
                            m'ont inculqué une solide éthique de travail et un œil pour le détail, des compétences que j'apporte <br />
                            désormais dans le monde du développement web. <br /> <br />
                            
                            Ma transition vers le développement web n'a pas été un simple changement de carrière, mais une réelle <br />
                            métamorphose professionnelle, motivée par une passion profonde pour la technologie et l'innovation.<br />
                            Fasciné depuis toujours par le potentiel infini du numérique, j'ai embrassé cette nouvelle voie avec<br />
                            l'enthousiasme de celui qui trouve sa vocation.<br /> <br />

                            Après une formation intensive en développement web, je mets à profit ma capacité à résoudre <br />
                            des problèmes complexes et mon approche méthodique pour créer des expériences utilisateur fluides et <br />
                            réactives. Aujourd'hui, je combine mon savoir-faire technique avec ma créativité pour développer des sites <br />
                            web qui non seulement fonctionnent bien, mais qui racontent aussi une histoire.<br /> <br />
                            
                            Toujours à la recherche de nouveaux défis, je suis prêt à mettre mon énergie et ma curiosité au service<br />
                            de projets innovants. Avec un pied dans l'ingénierie et l'autre dans la programmation, je suis le lien <br />
                            entre le concret et le virtuel, prêt à construire le futur du web ???
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
