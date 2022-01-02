import { motion } from "framer-motion";

function Navbar() {
	return (
		<nav
			class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
			aria-label="navbar"
		>
			<div class="container-fluid">
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbars"
					aria-controls="navbars"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<div
					class="collapse navbar-collapse justify-content-md-center"
					id="navbars"
				>
					<ul class="navbar-nav">
						<li class="nav-item">
							<motion.a
								class="nav-link active"
								aria-current="page"
								href="#Welcome"
								initial={{ y: "-35vh" }}
								animate={{ y: 0 }}
								transition={{ type: "spring", stiffness: 90 }}
							>
								Welcome
							</motion.a>
						</li>
						<li class="nav-item">
							<motion.a
								class="nav-link"
								aria-current="page"
								href="#AboutMe"
								initial={{ y: "-35vh" }}
								animate={{ y: 0 }}
								transition={{
									type: "spring",
									stiffness: 90,
									delay: 0.2,
								}}
							>
								About me
							</motion.a>
						</li>
						<li class="nav-item">
							<motion.a
								class="nav-link"
								href="#Education"
								initial={{ y: "-35vh" }}
								animate={{ y: 0 }}
								transition={{
									type: "spring",
									stiffness: 90,
									delay: 0.4,
								}}
							>
								Education
							</motion.a>
						</li>
						<li class="nav-item">
							<motion.a
								class="nav-link"
								href="#Experience"
								initial={{ y: "-35vh" }}
								animate={{ y: 0 }}
								transition={{
									type: "spring",
									stiffness: 90,
									delay: 0.6,
								}}
							>
								Experience
							</motion.a>
						</li>

						<li class="nav-item">
							<motion.a
								class="nav-link"
								href="#Projects"
								initial={{ y: "-35vh" }}
								animate={{ y: 0 }}
								transition={{
									type: "spring",
									stiffness: 90,
									delay: 0.8,
								}}
							>
								Projects
							</motion.a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
