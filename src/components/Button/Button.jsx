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
			) : (
				<FaDownload size={size} />
			)}
			{text ? <p>{text}</p> : null}
		</a>
	);
};

Button.propTypes = {
	text: PropTypes.string,
	btnIcon: PropTypes.string.isRequired,
	size: PropTypes.number.isRequired,
	link: PropTypes.string.isRequired,
};

export default Button;
