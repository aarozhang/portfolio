import { motion } from "framer-motion";

function AboutMe(header, text) {
	return (
		<motion.div
			class="container px-4 py-5"
			id="AboutMe"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1, transition: { duration: 1 } }}
			viewport={{ once: true, amount: 0.3 }}
		>
			<h2 class="pb-2 border-bottom">{header}</h2>
			<div class="row g-4 py-5 row-cols-1">
				<p class="lead">{text}</p>
			</div>
		</motion.div>
	);
}

export default AboutMe;
