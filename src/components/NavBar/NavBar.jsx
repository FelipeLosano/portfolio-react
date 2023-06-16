import styles from './NavBar.module.css';

const NavBar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.navbar}>
				<img
					className={styles.logo}
					src='img\react-logo.png'
					alt='react-logo'
				/>
				<nav>
					<a href='#Home'>Home</a>
					<a href='#About'>About</a>
					<a href='#Projects'>Projects</a>
					<a href='#Contact'>Contact</a>
				</nav>
			</div>
		</div>
	);
};

export default NavBar;
