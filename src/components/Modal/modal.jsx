function Modal(title, content) {
	let id = title.replace(/\s/g, "") + "Modal";
	return (
		<div
			class="modal fade"
			id={id}
			tabindex="-1"
			role="dialog"
			aria-labelledby={id}
			aria-hidden="true"
			style={{ color: "black" }}
		>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="ModalLongTitle">
							{title}
						</h5>
					</div>
					<div class="modal-body">
						<ul class="list-group list-group-flush">{content}</ul>
					</div>
					<div class="modal-footer">
						<button
							type="button"
							class="btn btn-secondary"
							data-bs-dismiss="modal"
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
