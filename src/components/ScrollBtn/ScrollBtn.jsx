import styles from './index.module.css';
import { FaArrowCircleUp } from 'react-icons/fa';
import { useState } from 'react';

const ScrollBtn = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	window.addEventListener('scroll', toggleVisible);

	return (
		<div
			className={styles.scrollBtn}
			onClick={scrollToTop}
			style={{
				display: visible ? 'flex' : 'none',
			}}
		>
			<FaArrowCircleUp color='#EEEEEE' size={20} />
		</div>
	);
};

export default ScrollBtn;
