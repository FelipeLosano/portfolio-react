import styles from './index.module.css';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const ProjectCard = ({ img, title, description, website, github }) => {
	return (
		<div className={styles.projectCard}>
			<div className={styles.options}>
				<div className={styles.red}></div>
				<div className={styles.yellow}></div>
				<div className={styles.green}></div>{' '}
			</div>
			<div className={styles.project}>
				<div className={styles.imgDiv}>
					<img src={img} />
				</div>
				<div className={styles.projectDetails}>
					<h1>{title}</h1>
					<p>{description}</p>
				</div>
				<div className={styles.btnContainer}>
					{website ? (
						<Button btnIcon='FaGlobe' link={website} size={30} />
					) : null}
					<Button btnIcon='FaGithub' link={github} size={30} />
				</div>
			</div>
		</div>
	);
};

ProjectCard.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	website: PropTypes.string,
	github: PropTypes.string.isRequired,
};

export default ProjectCard;
