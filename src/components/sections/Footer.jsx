import '/src/stylesheets/sections/Footer.css'
import { brand } from '/src/data.js'
import { ThemeContext } from '/src/contexts/ThemeContext.jsx'


const Footer = () => {
	return (
		<footer className='Footer'>
			<div className='container'>
				<p className='Footer-brand'>
					{brand} <span>© 2024</span>
				</p>
				
				
			</div>
			
		</footer>
	)
}

export default Footer
		
		