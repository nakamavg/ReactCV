import React from "react";
import { handleMouseMove, handleMouseLeave } from "./utils";

const ProjectCard = ({ project, index }) => {
    const renderPartners = (partners, partnerLinks) => {
        if (Array.isArray(partners) && Array.isArray(partnerLinks)) {
            return partners.map((partner, idx) => (
                <span key={idx}>
                    <a
                        href={partnerLinks[idx]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-300 hover:underline"
                    >
                        {partner}
                    </a>
                    {idx < partners.length - 1 && ", "}
                </span>
            ));
        }
        return (
            <a
                href={partnerLinks}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 hover:underline"
            >
                {partners}
            </a>
        );
    };

    return (
        <div
            id={`card-${index}`}
            key={index}
            className="bg-gradient-to-r from-blue-400 to-purple-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-4 border-yellow-400 hover:border-yellow-500 relative overflow-hidden"
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
            style={{ transition: "transform 0.2s ease-out" }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-20 pointer-events-none"></div>
            <h3 className="text-2xl font-semibold mb-2 text-white">{project.name}</h3>
            {project.partner && project.partnerlink && (
                <p className="text-yellow-300 mb-2">
                    <strong>Colaboradores:</strong> {renderPartners(project.partner, project.partnerlink)}
                </p>
            )}
            <p className="text-white mb-4">{project.description}</p>
            <p className="text-white mb-4">
                <strong>Tecnologías:</strong> {project.technologies}
            </p>
            {project.link && (
                <div className="text-white mb-4">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-300 hover:underline"
                    >
                        Ver en GitHub
                    </a>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;