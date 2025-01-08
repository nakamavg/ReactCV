import React from "react";
import SkillCard from "./SkillCard";
const SkillGrid = ({ skills, isTechnical }) => (
	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
	  {skills.map((skill, index) => (
		<SkillCard
		  key={index}
		  title={isTechnical ? skill.language : skill}
		  description={isTechnical ? skill.skills : [skill]}
		  isTechnical={isTechnical}
		/>
	  ))}
	</div>
  );
  
  export default SkillGrid;