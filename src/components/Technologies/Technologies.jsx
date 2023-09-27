import {
	FaReact,
	FaNodeJs,
	FaHtml5,
	FaCss3Alt,
	FaGitAlt,
	FaGithub,
	FaJava,
	FaAngular,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript } from 'react-icons/si';

import styles from './index.module.css';

const Technologies = () => {
	return (
		<div className={styles.card}>
			<div className={styles.technologies}>
				<h2 className={styles.tecTitle}>Tecnologias</h2>
				<div className={styles.tecLogos}>
					<FaHtml5 className={styles.techIconsHtml} />
					<FaCss3Alt className={styles.techIconsCss} />
					<IoLogoJavascript className={styles.techIconsJs} />
					<SiTypescript className={styles.techIconsTs} />
					<FaReact className={styles.techIconsReact} />
					<FaAngular className={styles.techIconsAngular} />
					<FaNodeJs className={styles.techIconsNode} />
					<FaJava className={styles.techIconsJava} />
					<FaGitAlt className={styles.techIconsGit} />
					<FaGithub className={styles.techIconsGitHub} />
				</div>
			</div>
		</div>
	);
};

export default Technologies;
