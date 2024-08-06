import { useState, useCallback, useEffect, useRef } from 'react';
function App() {
	const [length, setLength] = useState(8);
	const [numberAllowed, setNumberAllowed] = useState(false);
	const [characterAllowed, setCharacterAllowed] = useState(false);
	const [password, setPassword] = useState('');

	// useref hook 
	const passwordRef = useRef(null);

	const passwordGenerator = useCallback(() => {
		let pass = '';
		let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		if (numberAllowed) str += '0123456789';
		if (characterAllowed) str += '!@#$%^&*()_+';
		for (let i = 0; i <= length; i++) {
			let char = Math.floor(Math.random() * str.length + 1);
			pass += str.charAt(char);
		}
		setPassword(pass);
	}, [length, numberAllowed, characterAllowed, setPassword]);

	const copyPasswordToClipboard = useCallback(() => {
		passwordRef.current.select();
		window.navigator.clipboard.writeText(password);
	 },[password]);
	useEffect(() => {
		passwordGenerator();
	}, [length, numberAllowed, characterAllowed, passwordGenerator]);
	return (
		<div className="w-full h-screen flex items-center justify-center ">
			<div className="w-full max-w-md rounded-lg px-4 py-2 text-orange-600 bg-gray-700">
				<h2 className="text-2xl text-center text-white mb-4">
					Password Generator
				</h2>
				<div className="flex shadow-sm rounded-lg overlfow-hidden mb-4">
					<input
						type="text"
						value={password}
						className="outline-none w-full py-1 px-3 rounded-l-sm text-gray-700"
						placeholder="Password"
						readOnly
						ref={passwordRef}
					/>
					<button className="outline-none bg-green-600 font-semibold px-4 rounded-r-sm uppercase text-white shrink-0"
					onClick={copyPasswordToClipboard}>
						Copy
					</button>
				</div>
				<div className="flex text-sm gap-x-2 items-center justify-evenly">
					<div className="flex items-center gap-x-1">
						<input type="range" min={8} max={50} value={length} className='cursor-pointer'
						onChange={e => setLength(e.target.value)}/>
						<label htmlFor="" className='text-white'>Length : {length}</label>
					</div>
					<div className="flex items-center gap-x-1">
						<input
							type="checkbox"
							checked={numberAllowed}
							onChange={() => setNumberAllowed((prev) => !prev)}
						/>
						<label htmlFor="" className='text-white'>Number</label>
					</div>
					<div className="flex items-center gap-x-1">
						<input
							type="checkbox"
							checked={characterAllowed}
							onChange={() => setCharacterAllowed((prev)=> !prev)}
						/>
						<label htmlFor="" className='text-white'>Character</label>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
