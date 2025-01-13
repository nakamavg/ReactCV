import React from "react";

const SkillCard = ({ title, description, isSoftSkill }) => {
	const size = isSoftSkill
		? "w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56" // Tamaño grande para soft skills
		: "w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"; // Tamaño más pequeño para hard skills

	const titleSize = isSoftSkill
		? "text-lg sm:text-xl md:text-2xl" // Título más grande
		: "text-base sm:text-lg md:text-xl"; // Título más pequeño

	return (
		<div className="flex flex-col items-center m-4">
			{/* Esfera que contiene el título */}
			<div
				className={`rounded-full flex justify-center items-center transition-transform duration-500 cursor-pointer bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg hover:shadow-2xl ${size}`}
			>
				<h3
					className={`font-semibold text-yellow-300 text-center transition-opacity duration-300 ${titleSize}`}
				>
					{title}
				</h3>
			</div>
			{/* Descripción debajo de la esfera, solo si no es soft skill */}
			{!isSoftSkill && (
				<div className="mt-4 w-full bg-gradient-to-r from-blue-400 to-purple-500 p-4 rounded-lg transition-all duration-500 max-h-96 opacity-100 overflow-hidden">
					<ul className="list-disc list-inside text-white text-base sm:text-lg md:text-xl text-center">
						{description.map((desc, index) => (
							<li key={index} className="mb-2">
								{desc}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default SkillCard;