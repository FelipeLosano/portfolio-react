import styles from './index.module.css';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const Button = ({ text, btnIcon, size, link }) => {
	return (
		<a className={styles.btn} href={link} target='_blank' rel='noreferrer'>
			{btnIcon === 'FaGithub' ? (
				<FaGithub size={size} />
			) : btnIcon === 'FaLinkedin' ? (
				<FaLinkedin size={size} />
			) : (
				<FaGlobe size={size} />
			)}
			<p>{text}</p>
		</a>
	);
};

export default Button;
