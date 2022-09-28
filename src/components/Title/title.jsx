import headshot from "./headshot3.jpg";
import { motion } from "framer-motion";
import animationConstants from "../../constants";

function Title() {
	const ani = animationConstants;
	return (
		<div class="container col-xxl-10 px-4 py-4 mt-5 mb-2">
			<div class="row flex-lg-row-reverse align-items-center g-5 py-5">
				<motion.div
					class="col-10 col-sm-8 col-lg-6"
					initial={{ opacity: ani.initialOpacity, x: 100 }}
					animate={{ opacity: ani.animateOpacity, x: 0 }}
					transition={{
						duration: 1,
					}}
				>
					<img
						src={headshot}
						class="d-block mx-lg-auto img-fluid rounded-circle"
						alt="Headshot"
						width="400"
						height="175"
						loading="lazy"
					></img>
				</motion.div>
				<motion.div
					class="col-lg-6"
					initial={{ opacity: ani.initialOpacity, y: ani.initialY }}
					animate={{ opacity: ani.animateOpacity, y: ani.animateY }}
					transition={{
						duration: 1,
					}}
				>
					<h1 class="display-1 fw-bold lh-1 mb-3">Hi, I'm Aaron.</h1>
					<p class="lead">SWE. Web Dev. Photographer. Traveler.</p>
				</motion.div>
			</div>
		</div>
	);
}

export default Title;
