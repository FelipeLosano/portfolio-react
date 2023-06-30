import Button from '../Button/Button';
import styles from './index.module.css';

const About = () => {
	return (
		<div className={styles.AboutContainer}>
			<div className={styles.cardAbout}>
				<h2>Sobre mim</h2>
				<p className={styles.aboutP}>
					Tenho 19 anos, trabalho como suporte de T.I há 2 anos e atualmente
					busco uma oportunidade na área de desenvolvimento. Estou no 4° período
					do curso de Ciência da computação e estudo programação. Sou uma pessoa
					curiosa e dedicada, sempre busco aprender mais!
				</p>
				<Button text='Currículo' btnIcon='FaDownload' size={20} link='' />
			</div>
			<div className={styles.cardAbout}>
				<h2>Experiência</h2>
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
