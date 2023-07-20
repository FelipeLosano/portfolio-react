import Button from '../Button/Button';
import styles from './index.module.css';

const About = () => {
	return (
		<div className={styles.AboutContainer}>
			<div className={styles.cardAbout}>
				<h2>Sobre mim</h2>
				<div className={styles.aboutP}>
					<p>
						Tenho 19 anos. Estou no 5° período do curso de Ciência da computação
						e trabalho com T.I há 2 anos, atualmente como analista de suporte
						Jr. Também estudo programação no meu tempo livre com o objetivo de
						me tornar um desesenvolvedor fullstack.
					</p>
					<br />
					<p>
						Nesse tempo trabalhando com T.I, tive a oportunidade de trabalhar
						com suporte técnico, manutenção de computadores, redes e servidores,
						e também com desenvolvimento de sistemas web.
					</p>
				</div>
				<Button text='Currículo' btnIcon='FaDownload' size={20} link='' />
			</div>

			<div className={styles.aboutImg}>
				<img src='\img\programming-animate.svg' alt='' />
			</div>
		</div>
	);
};

export default About;
