const SkillCard = ({ title, description, isSoftSkill }) => {
	const initialSize = isSoftSkill ? 'w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48' : 'w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40';
	const hoverSize = 'w-full h-full';
	const titleSize = isSoftSkill ? 'text-sm sm:text-base md:text-lg' : 'text-xs sm:text-sm md:text-base';

	return (
		<div className="skill-card group relative flex justify-center items-center p-4 sm:p-6 md:p-8">
			<div className={`skill-circle ${initialSize} group-hover:${hoverSize} rounded-full group-hover:rounded-lg flex justify-center items-center transition-all duration-500 cursor-pointer overflow-hidden bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg group-hover:shadow-2xl group-hover:bg-yellow-500 group-hover:opacity-90`}>
				<h3 className={`skill-title ${titleSize} font-semibold text-yellow-300 text-center transition-opacity duration-300 group-hover:opacity-0`}>{title}</h3>
				<div className="skill-description absolute top-0 left-0 w-full h-full bg-white/90 p-4 sm:p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-center items-center rounded-lg">
					<ul className="skill-description-list list-disc list-inside text-blue-900 text-xs sm:text-sm md:text-base text-center overflow-y-auto max-h-full">
						{description.map((desc, index) => (
							<li key={index} className="mb-2">{desc}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SkillCard;