import './App.css';

import NavBar from './components/NavBar/NavBar';
import Title from './components/Title/Title';
import Technologies from './components/Technologies/Technologies';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import ScrollBtn from './components/ScrollBtn/ScrollBtn';

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
				<section id='Projects'>
					<Projects />
				</section>
				<ScrollBtn />
			</main>

			<footer></footer>
		</div>
	);
}

export default App;
