import styles from './index.module.css';

const About = () => {
	return (
		<div className={styles.AboutContainer}>
			<div className={styles.cardAbout}>
				<h1>Sobre mim</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae
					quod, beatae sint nobis optio atque ex modi qui ducimus aliquid?
					Libero explicabo delectus voluptate quia magnam, aspernatur voluptates
					ab.
				</p>
			</div>
			<div className={styles.cardAbout}>
				<h1>Sobre mim</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae
					quod, beatae sint nobis optio atque ex modi qui ducimus aliquid?
					Libero explicabo delectus voluptate quia magnam, aspernatur voluptates
					ab.
				</p>
			</div>
		</div>
	);
};

export default About;
