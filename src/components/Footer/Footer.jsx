import styles from './index.module.css';

import { FaHeart } from 'react-icons/fa'

const Footer = () => {
	return (
		<div className={styles.container}>
			<p>Feito por<strong><a href='https://www.linkedin.com/in/felipelosano/'> Felipe Losano </a></strong><FaHeart size={15}/></p>
		</div>
	);
};

export default Footer;
