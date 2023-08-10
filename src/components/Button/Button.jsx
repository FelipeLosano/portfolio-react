import styles from './index.module.css';
import PropTypes from 'prop-types';
import { FaGithub, FaLinkedin, FaGlobe, FaDownload } from 'react-icons/fa';

const Button = ({ text, btnIcon, size, link }) => {
	return (
		<a className={styles.btn} href={link} target='_blank' rel='noreferrer'>
			{btnIcon === 'FaGithub' ? (
				<FaGithub size={size} />
			) : btnIcon === 'FaLinkedin' ? (
				<FaLinkedin size={size} />
			) : btnIcon === 'FaGlobe' ? (
				<FaGlobe size={size} />
			) : btnIcon === 'FaDownload' ? (
				<FaDownload size={size} />
			) : null}
			{text ? <p>{text}</p> : null}
		</a>
	);
};

Button.propTypes = {
	text: PropTypes.string,
	btnIcon: PropTypes.string,
	size: PropTypes.number,
	link: PropTypes.string,
};

export default Button;
