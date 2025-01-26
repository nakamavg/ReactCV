import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ToggleSwitch from './ToggleSwitch'; // Ajusta la ruta según tu estructura
import SkillGrid from './SkillGrid';
import Spinner from './Spinner'; // Importa el nuevo componente Spinner

const Skills = () => {
  const [technicalSkills, setTechnicalSkills] = useState([]);
  const [softSkills, setSoftSkills] = useState([]);
  const [showTechnical, setShowTechnical] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const technicalResponse = await axios.get('https://holamundovercelback.vercel.app/skills');
        setTechnicalSkills(technicalResponse.data);

        const softResponse = await axios.get('https://holamundovercelback.vercel.app/skills/soft');
        const softSkillsArray = softResponse.data.map(item => item.softSkills).flat();
        setSoftSkills(softSkillsArray);
      } catch (err) {
        setError(err);
      } finally {
        setTimeout(() => setLoading(false), 1000); // Mantén el spinner visible por 1 segundo más
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return <Spinner loading={loading} message="Cargando base de datos..." />;
  }

  if (error) {
    return <div className="text-center text-red-500 py-4">Error al cargar las habilidades: {error.message}</div>;
  }

  return (
    <section className="container mx-auto p-8">
      <div className="flex justify-center mb-8">
        <ToggleSwitch
          checked={showTechnical}
          onChange={() => setShowTechnical(!showTechnical)}
          label1="Habilidades Técnicas"
          label2="Hablidades Transversales"
        />
      </div>

      {showTechnical ? (
        <div>
          <SkillGrid skills={technicalSkills} isTechnical />
        </div>
      ) : (
        <div>
          <SkillGrid skills={softSkills} isTechnical={false} />
        </div>
      )}
    </section>
  );
};

export default Skills;