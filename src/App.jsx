import { FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import './App.css';

import NavBar from './components/NavBar/NavBar';

function App() {
	const tecSizes = 60;

	return (
		<div className='container'>
			<header>
				<NavBar />
			</header>

			<main>
				<section id='Home'>
					<div className='card'>
						<div className='home'>
							<div className='div-img'>
								<img src='./img/Felipe.jpg' alt='' className='home-img' />
							</div>
							<div className='div-title'>
								<h1>Felipe Losano</h1>
								<p>Desenvolvedor Full-Stack</p>
							</div>
						</div>
					</div>
					<div className='card'>
						<div className='technologies'>
							<h1 className='tec-title'>Tecnologias</h1>
							<div className='tec-logos'>
								<ul>
									<li>
										<FaReact color='#61dbfb' size={tecSizes} />
									</li>
									<li>
										<FaNodeJs color='#3c873a' size={tecSizes} />
									</li>
									<li>
										<FaJava color='#f89820' size={tecSizes} />
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer></footer>
		</div>
	);
}

export default App;
