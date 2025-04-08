import { useState } from "react";
import "./Service-options.css";
import nailArtConsultation from "../../../assets/img/nailArtConsultation.png";
import inPersonNailConsultation from "../../../assets/img/inPersonNailConsultation.png";
import nailArtLessons from "../../../assets/img/nail-care.png";

export function ServiceOptions() {
    const [selectedService, setSelectedService] = useState<string | null>(null);

    const services = [
        { key: "nailArtConsultation", name: "Regular Nail Polish", img: nailArtConsultation },
        { key: "inPersonNailConsultation", name: "Regular Pedicure", img: inPersonNailConsultation },
        { key: "nailArtLessons", name: "With Nail Design", img: nailArtLessons }
    ];

    return (
        <div className="service-options-component">
            <h3>Service Options</h3>
            <div className="service-options">
                {services.map((service) => (
                    <div
                        key={service.key}
                        className={`service-option ${selectedService === service.key ? "selected" : ""}`}
                        onClick={() => setSelectedService(service.key)}
                    >
                        <img src={service.img} alt={service.name} className="service-icon" />
                        <p>{service.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
