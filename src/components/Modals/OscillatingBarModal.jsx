
import styles from"./modals.module.css";


function OscillatingBarModal() {
	return (
		<div className={styles["oscillating_bar_loader"]}>
			<div className={styles["justify-content-center"] + " " +styles["jimu-primary-loading"]}></div>
		</div>
	)
}

export default OscillatingBarModal;