import Feature from "../Feature/feature";
import { motion } from "framer-motion";
import animationConstants from "../../constants";

function renderFeatures(object) {
	let renderedFeatures = [];
	object.forEach((feature) => {
		renderedFeatures.push(
			Feature(feature.title, feature.subtitle, feature.summary)
		);
	});

	return renderedFeatures;
}

function InfoContainer(header, object) {
	const ani = animationConstants;
	return (
		<motion.div class="container px-4 py-5" id={header}>
			<motion.h2
				initial={{ opacity: ani.initialOpacity }}
				whileInView={{
					opacity: ani.animateOpacity,
					transition: { duration: ani.duration },
				}}
				viewport={{ once: true, amount: ani.viewport }}
				class="pb-2 border-bottom"
			>
				{header}
			</motion.h2>
			<div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
				{renderFeatures(object)}
			</div>
		</motion.div>
	);
}

export default InfoContainer;
