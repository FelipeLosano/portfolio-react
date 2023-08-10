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
				<h2 className={styles.tecTitle}>Tecnologias</h2>
				<div className={styles.tecLogos}>
					<FaHtml5 className={styles.techIconsHtml} />
					<FaCss3Alt className={styles.techIconsCss} />
					<IoLogoJavascript className={styles.techIconsJs} />
					{/* <SiTypescript className={styles.techIconsTs} /> */}
					<FaReact className={styles.techIconsJsx} />
					<FaNodeJs className={styles.techIconsNode} />
					<FaGitAlt className={styles.techIconsGit} />
					<FaGithub className={styles.techIconsGitHub} />
				</div>
			</div>
		</div>
	);
};

export default Technologies;
