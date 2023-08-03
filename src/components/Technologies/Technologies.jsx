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
		<div className={styles.card}>
			<div className={styles.technologies}>
				<h1 className={styles.tecTitle}>Tecnologias</h1>
				<div className={styles.tecLogos}>
					<ul>
						<li>
							<FaHtml5 className={styles.techIconsHtml} />
						</li>
						<li>
							<FaCss3Alt className={styles.techIconsCss} />
						</li>
						<li>
							<IoLogoJavascript className={styles.techIconsJs} />
						</li>
						{/* <li>
										<SiTypescript className={styles.techIconsTs} />
									</li> */}
						<li>
							<FaReact className={styles.techIconsJsx} />
						</li>
						<li>
							<FaNodeJs className={styles.techIconsNode} />
						</li>
						<li>
							<FaGitAlt className={styles.techIconsGit} />
						</li>
						<li>
							<FaGithub className={styles.techIconsGitHub} />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Technologies;
