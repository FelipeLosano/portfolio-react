import styles from './index.module.css';
import { FaReact } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
	return (
		<div className={styles.navbar}>
			<FaReact className={styles.logo} />
			<nav>
				<ul>
					<li>
						<Link
							to='About'
							spy={true}
							smooth={true}
							offset={-70}
							duration={300}
						>
							Sobre
						</Link>
					</li>
					<li>
						<Link
							to='Projects'
							spy={true}
							smooth={true}
							offset={-70}
							duration={300}
						>
							Projetos
						</Link>
					</li>
					<li>
						<Link
							to='Contact'
							spy={true}
							smooth={true}
							offset={-70}
							duration={300}
						>
							Contato
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
