import { motion } from "framer-motion";

function Feature(organization, role, summary) {
	return (
		<div class="feature col">
			<div class="feature-icon bg-primary bg-gradient"></div>
			<h2>{organization}</h2>
			<p class="lead">{role}</p>
			<p>{summary}</p>
			<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				onClick={() => null}
			>
				See details
			</motion.button>
		</div>
	);
}

export default Feature;
