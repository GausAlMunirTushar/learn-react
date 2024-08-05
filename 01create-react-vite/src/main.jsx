import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App"
import './index.css'

// function MyApp() {
// 	return (
// 		<div>
// 			<h1>My App form Custom React Code</h1>
// 		</div>
// 	)
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <MyApp></MyApp> */}
	<App/>
  </React.StrictMode>,
)
