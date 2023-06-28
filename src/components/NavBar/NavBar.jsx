import styles from './index.module.css';
import { FaReact } from 'react-icons/fa';

const NavBar = () => {
	return (
		<div className={styles.navbar}>
			{/* <img className={styles.logo} src='img\react-logo.png' alt='react-logo' /> */}
			<FaReact className={styles.logo} />
			<nav>
				<ul>
					<li>
						<a href='#Home'>Início</a>
					</li>
					<li>
						<a href='#About'>Sobre</a>
					</li>
					<li>
						<a href='#Projects'>Projetos</a>
					</li>
					<li>
						<a href='#Contact'>Contato</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
