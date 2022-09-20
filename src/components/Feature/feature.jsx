import { motion } from "framer-motion";
import modalInfo from "../../modalInfo.jsx";
import Modal from "../Modal/modal.jsx";

function Feature(title, subtitle, summary) {
	const modalContent = () => {
		let render = [];
		modalInfo[title].forEach((text) =>
			render.push(<li class="list-group-item">{text}</li>)
		);

		return render;
	};

	let dataBsTarget = "#" + title.replace(/\s/g, "") + "Modal";

	return (
		<div>
			<motion.div class="feature col my-3">
				<div class="feature-icon bg-primary bg-gradient"></div>
				<h2>{title}</h2>
				<p class="lead">{subtitle}</p>
				<p>{summary}</p>
				<motion.button
					whileHover={{
						scale: 1.1,
					}}
					whileTap={{ scale: 0.9 }}
					type="button"
					data-bs-toggle="modal"
					data-bs-target={dataBsTarget}
				>
					See details
				</motion.button>
			</motion.div>
			{Modal(title, modalContent())}
		</div>
	);
}

export default Feature;
