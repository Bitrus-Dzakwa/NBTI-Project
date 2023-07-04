import styles from"./modals.module.css";


function OscillatingBarModal() {
	return (
		<div class={styles["oscillating_bar_loader"]}>
			<div class={styles["justify-content-center"] + " " +styles["jimu-primary-loading"]}></div>
		</div>
	)
}

export default OscillatingBarModal;