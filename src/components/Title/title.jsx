import headshot from "./headshot3.jpg";
import { motion } from "framer-motion";

function Title() {
	return (
		<div class="container col-xxl-10 px-4 py-4 mt-5 mb-2">
			<motion.div
				class="row flex-lg-row-reverse align-items-center g-5 py-5"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					duration: 2,
				}}
			>
				<div class="col-10 col-sm-8 col-lg-6">
					<img
						src={headshot}
						class="d-block mx-lg-auto img-fluid rounded-circle"
						alt="Headshot"
						width="400"
						height="175"
						loading="lazy"
					></img>
				</div>
				<div class="col-lg-6">
					<h1 class="display-1 fw-bold lh-1 mb-3">Hi, I'm Aaron.</h1>
					<p class="lead">
						Software Engineer. Photographer. Traveler.
					</p>
				</div>
			</motion.div>
		</div>
	);
}

export default Title;
