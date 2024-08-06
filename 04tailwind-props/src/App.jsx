import './App.css';
import ProfileCard from './components/ProfileCard';

function App() {
	const personInfo = {
		name: "Delba",
		age: 24,
	}
	return (
		<>
			<h1 className="bg-green-500 text-black mb-5 p-4 rounded-xl font-bold">
				Hello Tailwind
			</h1>
			<ProfileCard username="Youtube" info={personInfo} btnText="View Me"/>
			<ProfileCard username="GausAlMunirTushar" btnText="View Profile"/>
		</>
	);
}

export default App;
