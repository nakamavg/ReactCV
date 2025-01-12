import React from "react";

const SkillCard = ({ title, description, isSoftSkill }) => {
	const size = isSoftSkill ? 'w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48' : 'w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40';
	const titleSize = isSoftSkill ? 'text-sm sm:text-base md:text-lg' : 'text-xs sm:text-sm md:text-base';

	return (
		<div className="skill-card group relative flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
			<div
				className={`skill-circle ${size} rounded-full flex justify-center items-center transition-all duration-500 cursor-pointer overflow-hidden bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg group-hover:shadow-2xl`}
			>
				<h3 className={`skill-title ${titleSize} font-semibold text-yellow-300 text-center transition-opacity duration-300`}>{title}</h3>
			</div>
			<div
				className={`skill-description mt-4 w-full bg-gradient-to-r from-blue-400 to-purple-500 p-4 rounded-lg transition-all duration-500 max-h-96 opacity-100 sm:max-h-0 sm:opacity-0 sm:group-hover:max-h-96 sm:group-hover:opacity-100 overflow-hidden`}
			>
				<ul className="skill-description-list list-disc list-inside text-white text-xs sm:text-sm md:text-base text-center">
					{description.map((desc, index) => (
						<li key={index} className="mb-2">{desc}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default SkillCard;