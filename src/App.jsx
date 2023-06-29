import './App.css';

import NavBar from './components/NavBar/NavBar';
import Title from './components/Title/Title';
import Technologies from './components/Technologies/Technologies';
import About from './components/About/About';

function App() {
	return (
		<div className='container'>
			<header>
				<NavBar />
			</header>

			<main>
				<section id='Home'>
					<Title />
					<Technologies />
				</section>
				<section id='About'>
					<About />
				</section>
			</main>

			<footer></footer>
		</div>
	);
}

export default App;
