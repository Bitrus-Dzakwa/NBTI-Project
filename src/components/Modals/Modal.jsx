
import { createPortal } from "react-dom";

import styles from "./modals.module.css";
import { useState } from "react";


const defaultOverlayStyle = {
	backgroundColor: "red",
	opacity: 0.5
}

function Modal({ modalContent, isOpen, onClose, overlayStyle, closeOnOutsideClick = true }) {

	const [hideModal, setHideModal] = useState(false);

	const OnModalClose = () => {
		closeOnOutsideClick ? setHideModal(() => true) : "";
		onClose();
	}

	return isOpen ?
		createPortal(
			<div id={styles["react_portal_overlay"]} style={{ display: hideModal ? "none" : "flex" }} onClick={OnModalClose}>
				<div className={styles["bg-overlay"]} style={overlayStyle || defaultOverlayStyle} />
				{modalContent}
			</div>,
			document.body
		)
		:
		<></>
}

export default Modal;
// createPortal(<ModalOverlay overlayStyle={overlayStyle || defaultOverlayStyle}>{modalContent}</ModalOverlay>, document.body)
