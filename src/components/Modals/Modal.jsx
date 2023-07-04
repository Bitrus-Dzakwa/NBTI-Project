
import { createPortal } from "react-dom";

import styles from "./modals.module.css";


const defaultOverlayStyle = {
	backgroundColor: "red",
	opacity: 0.5
}
// const ModalOverlay = ({ children, overlayStyle }) => (
// 	<div id={styles["react_portal_overlay"]} style={{ position: "fixed" }}>
// 		<div className={styles["bg-overlay"]} style={overlayStyle}></div>
// 		{children}
// 	</div>
// );


function Modal({ modalContent, isOpen, onClose, overlayStyle }) {

	const OnModalClose = () => {
		onClose();
	}

	return isOpen ?
		<div id={styles["react_portal_overlay"]} style={{ position: "fixed" }} onClick={OnModalClose}>
			<div className={styles["bg-overlay"]} style={overlayStyle}></div>
			{
				createPortal(<ModalOverlay children={modalContent} overlayStyle={overlayStyle || defaultOverlayStyle} />, document.body)
			}
		</div>
		:
		<></>
}

export default Modal;




	// {
	// 	isCustomStyling ?
	// 		createPortal(<ModalOverlay children={modalContent} overlayStyle={overlayStyle || defaultOverlayStyle} />, document.body)
	// 		:
	// 		createPortal(modalContent, document.body)
	// }