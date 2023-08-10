import styles from './index.module.css';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
	return (
		<div className={styles.card}>
			<h2>Projetos</h2>
			<div className={styles.divProjetos}>
				<ProjectCard
					title='Projeto Netflix'
					description='Projeto criado com base na página inicial da Netflix utilizando React.'
					img='./img/projeto1.webp'
					website='https://projeto-netflix-felipelosano.vercel.app/'
					github='https://github.com/FelipeLosano/Projeto-Netflix'
				/>
				<ProjectCard
					title='Projeto Form'
					description='Projeto dedicado a criação de um fomulário de registro responsivo e 100% validado.'
					img='./img/projeto2.webp'
					website='/register-form'
					github='https://github.com/FelipeLosano/Projeto-Form'
				/>
				<ProjectCard
					title='Em Breve'
					description='Em breve mais projetos!'
					img='./img/loading.jpg'
					website=''
					github='https://github.com/FelipeLosano/'
				/>
			</div>
		</div>
	);
};

export default Projects;
