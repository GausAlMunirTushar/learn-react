import { useState } from 'react';
import ColorButton from './ColorButton';
import './App.css';



function App() {
	const [color, setColor] = useState('olive');
	const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'pink', 'olive', 'gray', 'orange']; // You can add more colors here

	return (
		<div
			className="w-full h-screen duration-200"
			style={{ backgroundColor: color }}
		>
			<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
				<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
					{colors.map((color) => (
						<ColorButton key={color} color={color} setColor={setColor} />
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
