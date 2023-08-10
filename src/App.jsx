import './App.css';

import NavBar from './components/NavBar/NavBar';
import Title from './components/Title/Title';
import Technologies from './components/Technologies/Technologies';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ScrollBtn from './components/ScrollBtn/ScrollBtn';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<>
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

					<section id='Contact'>
						<Contact />
					</section>

					{window.innerWidth > 500 && <ScrollBtn />}
				</main>
			</div>

			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;
