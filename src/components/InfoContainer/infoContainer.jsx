import Feature from "../Feature/feature";
import { motion } from "framer-motion";

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
	return (
		<motion.div
			class="container px-4 py-5"
			id={header}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1, transition: { duration: 1 } }}
			viewport={{ once: true, amount: 0.3 }}
		>
			<h2 class="pb-2 border-bottom">{header}</h2>
			<div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
				{renderFeatures(object)}
			</div>
		</motion.div>
	);
}

export default InfoContainer;
