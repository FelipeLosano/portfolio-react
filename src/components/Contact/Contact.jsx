import validator from 'validator';

import styles from './index.module.css';

const Contact = () => {
	let errorName = false;
	let errorEmail = false;
	let errorMsg = false;

	const handleSubmit = (e) => {
		e.preventDefault();
		handleValidate(e);
		if (handleError()) {
			e.target.submit();
		}
	};

	const handleValidate = (e) => {
		const name = e.target.name.value;
		const email = e.target.email.value;
		const msg = e.target.message.value;

		if (!validator.isLength(name, { min: 3, max: 30 })) {
			errorName = true;
			return;
		}
		errorName = false;

		if (!validator.isEmail(email)) {
			errorEmail = true;
			return;
		}
		errorEmail = false;

		if (!validator.isLength(msg, { min: 10, max: 1000 })) {
			errorMsg = true;
			return;
		}
		errorMsg = false;
	};

	const handleError = () => {
		const span = document.querySelector('#errorSpan');

		if (errorName) {
			span.innerHTML = 'Nome inválido';
			return false;
		}
		if (errorEmail) {
			span.innerHTML = 'Email inválido';
			return false;
		}
		if (errorMsg) {
			span.innerHTML = 'Mensagem precisa conter no mínimo 10 caracteres';
			return false;
		}

		span.innerHTML = '';
		return true;
	};

	return (
		<div className={styles.card}>
			<div>
				<h2>Contato</h2>
			</div>
			<div className={styles.formDiv}>
				<form
					action='https://formsubmit.co/felipelosano@outlook.com'
					method='POST'
					target='_blank'
					onSubmit={handleSubmit}
				>
					<input
						className={styles.inptStyle}
						type='text'
						name='name'
						placeholder='Nome'
					/>
					<br />
					<input
						className={styles.inptStyle}
						type='email'
						name='email'
						placeholder='Email'
					/>
					<br />
					<textarea
						className={styles.inptStyle}
						placeholder='Your Message'
						name='message'
						rows='10'
					></textarea>
					<span id='errorSpan' className={styles.errorSpan}></span>

					<button className={styles.btn} type='submit'>
						Enviar
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
