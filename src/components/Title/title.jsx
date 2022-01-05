import headshot from "./headshot3.jpg";
import { motion } from "framer-motion";

function Title() {
	return (
		<div class="container col-xxl-8 px-4 py-5 mt-5 mb-2" id="Welcome">
			<motion.div
				class="row flex-lg-row-reverse align-items-center g-5 py-5"
				// initial={{ opacity: 0 }}
				// animate={{ opacity: 1 }}
				// transition={{ delay: 2, duration: 2 }}
			>
				<motion.div
					class="col-10 col-sm-8 col-lg-6"
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ delay: 2.2, duration: 1 }}
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
				<div class="col-lg-6">
					<motion.h1
						class="display-1 fw-bold lh-1 mb-3"
						initial={{ x: "-100vw" }}
						animate={{ x: 0 }}
						transition={{
							delay: 1.6,
							bounce: 0.5,
							type: "spring",
						}}
					>
						Hi, I'm Aaron.
					</motion.h1>
					<motion.p
						class="lead"
						initial={{ x: "-100vw" }}
						animate={{ x: 0 }}
						transition={{
							delay: 1.8,
							bounce: 0.5,
							type: "spring",
						}}
					>
						Software engineer from Charlotte.
					</motion.p>
				</div>
			</motion.div>
		</div>
	);
}

export default Title;
