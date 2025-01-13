import React, { useState } from "react";
import SkillCard from "./SkillCard";

const SkillGrid = ({ skills, isTechnical }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8">
      {skills.map((skill, index) => (
        <SkillCard
          key={index}
          title={isTechnical ? skill.language : skill}
          description={isTechnical ? skill.skills : [skill]}
          isSoftSkill={!isTechnical}
        />
      ))}
    </div>
  );
};

export default SkillGrid;
