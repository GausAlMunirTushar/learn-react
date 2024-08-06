const ColorButton = ({ color, setColor }) => {
	return (
		<button
			className="outline-none px-4 py-1 rounded-full"
			style={{ backgroundColor: color }}
			onClick={() => setColor(color)}
		>
			{color.charAt(0).toUpperCase() + color.slice(1)}
		</button>
	);
};

export default ColorButton;