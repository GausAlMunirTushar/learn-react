

const Conditionals = () => {
	let age = 17;

	// if(age < 18) {
	// 	return (
	// 		<div>
	// 			<h1>You are not allowed to watch this movie</h1>
	// 		</div>
	// 	)
	// }
  return (
	<div>
		<button>{age < 18 ? 'Not allowed' : 'Watch Now'}</button>
		<button></button>
	</div>
  )
}

export default Conditionals