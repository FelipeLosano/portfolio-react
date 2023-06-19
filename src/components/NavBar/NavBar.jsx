import styles from './NavBar.module.css';
import { FaReact } from 'react-icons/fa';

const NavBar = () => {
	return (
		<div className={styles.navbar}>
			{/* <img className={styles.logo} src='img\react-logo.png' alt='react-logo' /> */}
			<FaReact className={styles.logo} />
			<nav>
				<ul>
					<li>
						<a href='#Home'>Home</a>
					</li>
					<li>
						<a href='#About'>About</a>
					</li>
					<li>
						<a href='#Projects'>Projects</a>
					</li>
					<li>
						<a href='#Contact'>Contact</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
