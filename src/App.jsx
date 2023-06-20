import {
	FaReact,
	FaNodeJs,
	FaJava,
	FaHtml5,
	FaCss3Alt,
	FaGitAlt,
	FaGithub,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript } from 'react-icons/si';
import './App.css';

import NavBar from './components/NavBar/NavBar';

function App() {

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
										<FaHtml5 color='#e34c26' />
									</li>
									<li>
										<FaCss3Alt color='#264de4' />
									</li>
									<li>
										<IoLogoJavascript color='#F0DB4F' />
									</li>
									{/* <li>
										<SiTypescript color='#007acc' />
									</li> */}
									<li>
										<FaReact color='#61dbfb' />
									</li>
									<li>
										<FaNodeJs color='#3c873a' />
									</li>
									<li>
										<FaJava color='#f89820' />
									</li>
									<li>
										<FaGitAlt color='#F1502F' />
									</li>
									<li>
										<FaGithub color='#171515' />
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
