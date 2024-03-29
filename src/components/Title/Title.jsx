import Button from '../Button/Button';
import styles from './index.module.css';
const Title = () => {
	return (
		<div className={styles.card}>
			<div className={styles.home}>
				<div className={styles.divImg}>
					<img src='./img/Felipe.jpg' alt='' className={styles.homeImg} />
				</div>
				<div className={styles.divTitle}>
					<h1>Felipe Losano</h1>
					<p className={styles.title}>Desenvolvedor Full-Stack</p>
					<div className={styles.btnDiv}>
						<Button
							text='Github'
							btnIcon='FaGithub'
							size={40}
							link='https://github.com/FelipeLosano'
						/>
						<Button
							text='Linkedin'
							btnIcon='FaLinkedin'
							size={40}
							link='https://www.linkedin.com/in/felipelosano'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Title;
