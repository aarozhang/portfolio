import { motion } from "framer-motion";
import animationConstants from "../../constants";

function AboutMe(header, text) {
	const ani = animationConstants;
	return (
		<div class="container px-4 py-5" id="AboutMe">
			<motion.h2
				class="pb-2 border-bottom"
				initial={{ opacity: ani.initialOpacity, y: ani.initialY }}
				whileInView={{
					opacity: ani.animateOpacity,
					y: ani.animateY,
					transition: { duration: ani.duration },
				}}
				viewport={{ once: true, amount: ani.viewport }}
			>
				{header}
			</motion.h2>
			<motion.div
				class="row g-4 py-5 row-cols-1"
				initial={{ opacity: 0, y: 100 }}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: { duration: 0.5 },
				}}
				viewport={{ once: true, amount: 0 }}
			>
				<motion.p class="lead">{text}</motion.p>
			</motion.div>
		</div>
	);
}

export default AboutMe;
