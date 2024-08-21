import React, { useState } from "react";
import bannerImage from '../../assets/banner/banner.jpg';
import './Contact.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faEnvelope, faMailBulk, faPhone, faReplyAll } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = ({ target: { name, value } }) => setFormData(prev => ({ ...prev, [name]: value }));

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div id="contact" className="contact">
            <div className="banner-container">
                <img className="banner" src={bannerImage} alt="Section Contact" />
                <h1 className="banner-title">Contactez moi</h1>
                <p className="banner-text">
                    Transformons vos visions en expériences web remarquables. <br />
                    Contactez-moi pour discuter de vos projets et concrétiser vos ambitions digitales !
                </p>
            </div>

            <div className="contact-container">
                <div className="contact-info">
                    <h3>Prêt à <strong>transformer</strong> vos idées en <strong>réalité numérique</strong> ?</h3>
                        <FontAwesomeIcon id="icon-reply" icon={faReplyAll}/>
                    <div className="email-info">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>emiliengriffon@hotmail.fr</span>
                    </div>
                    <div className="email-info">
                        <FontAwesomeIcon icon={faPhone} />
                        <span>06 11 15 56 23</span>
                    </div>
                </div>
                <div className="contact-forms">
                    <form onSubmit={handleSubmit}>
                        {['Nom • Prénom', 'email', 'message'].map(field => (
                            <div className="form-group" key={field}>
                                <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                                {field === 'message' ? (
                                    <textarea
                                        id={field}
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        rows="4"
                                        required
                                    />
                                ) : (
                                    <input
                                        type={field === 'email' ? 'email' : 'text'}
                                        id={field}
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        required
                                    />
                                )}
                            </div>
                        ))}
                        <button type="submit">Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
