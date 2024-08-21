import React, { useState } from "react";
import bannerImage from '../../assets/banner/banner.jpg';
import './Contact.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faReplyAll } from "@fortawesome/free-solid-svg-icons";
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(""); // Pour afficher un message de succès ou d'erreur

    const handleChange = ({ target: { name, value } }) => setFormData(prev => ({ ...prev, [name]: value }));

    const handleSubmit = e => {
        e.preventDefault();

        // Envoyer l'e-mail via EmailJS
        emailjs.send('service_jxywe0e', 'template_pnfbb9l', {
            to_name: "Emilien",
            from_name: formData.name,
            reply_to: formData.email,
            message: formData.message
        }, 'auSOGIWsHCrxdjIYX')
            .then((result) => {
                console.log(result.text);
                setStatus("Votre message a été envoyé avec succès !");
                setFormData({ name: '', email: '', message: '' }); // Réinitialiser le formulaire
            }, (error) => {
                console.log(error.text);
                setStatus("Une erreur s'est produite. Veuillez réessayer.");
            });
    };

    return (
        <section id="contact" className="contact">
            <div className="banner-container">
                <img className="banner" src={bannerImage} alt="Bannière de la section Contact" />
                <h1 className="banner-title">Contactez-moi</h1>
                <p className="banner-text">
                    Transformons vos visions en expériences web remarquables. <br />
                    Contactez-moi pour discuter de vos projets et concrétiser vos ambitions digitales !
                </p>
            </div>

            <div className="contact-container">
                <div className="contact-info">
                    <h2>Prêt à <strong>transformer</strong> vos idées en <strong>réalité numérique</strong> ?</h2>
                    <FontAwesomeIcon id="icon-reply" icon={faReplyAll} aria-hidden="true"/>
                    <div className="email-info">
                        <FontAwesomeIcon icon={faEnvelope} aria-hidden="true"/>
                        <a href="mailto:emiliengriffon@hotmail.fr">emiliengriffon@hotmail.fr</a>
                    </div>
                    <div className="email-info">
                        <FontAwesomeIcon icon={faPhone} aria-hidden="true"/>
                        <a href="tel:+0611155623">06 11 15 56 23</a>
                    </div>
                </div>
                <div className="contact-forms">
                    <form onSubmit={handleSubmit} aria-labelledby="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Nom</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                required
                            />
                        </div>
                        <button type="submit">Envoyer</button>
                        <p className="status-message"></p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
