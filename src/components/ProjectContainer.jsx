import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";

const ProjectsContainer = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get("https://holamundovercelback.vercel.app/projects");
                setProjects(response.data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="container mx-auto p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-yellow-400">Proyectos</h2>
            <div className="grid grid-cols-1 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectsContainer;