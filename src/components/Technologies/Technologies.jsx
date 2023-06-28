import {
	FaReact,
	FaNodeJs,
	FaHtml5,
	FaCss3Alt,
	FaGitAlt,
	FaGithub,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
// import { SiTypescript } from 'react-icons/si';

import styles from './index.module.css';

const Technologies = () => {
	return (
		<div className='card'>
			<div className={styles.technologies}>
				<h1 className={styles.tecTitle}>Tecnologias</h1>
				<div className={styles.tecLogos}>
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
							<FaGitAlt color='#F1502F' />
						</li>
						<li>
							<FaGithub color='#171515' />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Technologies;
