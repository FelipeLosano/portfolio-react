import styles from './index.module.css';
const Title = () => {
	return (
		<div className='card'>
			<div className={styles.home}>
				<div className={styles.divImg}>
					<img src='./img/Felipe.jpg' alt='' className={styles.homeImg} />
				</div>
				<div className={styles.divTitle}>
					<h1>Felipe Losano</h1>
					<p>Desenvolvedor Full-Stack</p>
				</div>
			</div>
		</div>
	);
};

export default Title;
