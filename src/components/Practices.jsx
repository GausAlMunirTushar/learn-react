import React from 'react'

const Practices = () => {
	const students = []
  return (
	<>
		<p>{students.length && "No Students Found"}</p>
		<p>Number of Students: {students.length}</p>
	</>
  )
}

export default Practices