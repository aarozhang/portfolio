function Modal() {
	return (
		<div
			class="modal fade"
			id="exampleModalLong"
			tabindex="-1"
			role="dialog"
			aria-labelledby="exampleModalLongTitle"
			aria-hidden="true"
		>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLongTitle">
							Modal title
						</h5>
					</div>
					<div class="modal-body">...</div>
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
