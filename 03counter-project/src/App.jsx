import { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	const addValue = () => {
		if(count < 10)
		setCount(count + 1);
	};

	const removeValue = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	return (
		<>
			<h2>Counter Value: {count}</h2>
			<button onClick={addValue}>Add</button>
			<button onClick={removeValue}>Remove</button>
		</>
	);
}

export default App;
