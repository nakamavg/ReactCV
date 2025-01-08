const ToggleSwitch = ({ checked, onChange, label1, label2 }) => {
	return (
		<div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
			<span className={`text-xl font-bold transition-all duration-300 ${checked ? 'text-yellow-500 text-2xl shine' : 'text-gray-800'}`}>
				{label1}
			</span>
			<div className="relative flex items-center w-16 h-8 md:w-24 md:h-12 bg-gray-800 rounded-full cursor-pointer p-1 shadow-md" onClick={() => onChange(!checked)}>
				<span
					className={`absolute w-6 h-6 md:w-10 md:h-10 bg-yellow-500 rounded-full transition-transform duration-300 ${
						checked ? 'translate-x-0' : 'translate-x-8 md:translate-x-12'
					}`}
				></span>
			</div>
			<span className={`text-xl font-bold transition-all duration-300 ${!checked ? 'text-yellow-500 text-2xl shine' : 'text-gray-800'}`}>
				{label2}
			</span>
		</div>
	);
};

export default ToggleSwitch;