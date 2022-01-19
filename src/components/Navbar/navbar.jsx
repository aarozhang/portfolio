import { motion } from "framer-motion";

function Navbar() {
	const navbarMotion = {
		hidden: { opacity: 0 },
		show: { opacity: 1, transition: { staggerChildren: 0.2 } },
	};

	const navbarItemMotion = {
		hidden: { y: "-35vh" },
		show: { y: 0, transition: { type: "spring", bounce: 0.4 } },
	};

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
					id="burgerMenu"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<div
					class="collapse navbar-collapse justify-content-md-center"
					id="navbars"
				>
					<motion.ul
						class="navbar-nav"
						variants={navbarMotion}
						initial="hidden"
						animate="show"
					>
						<li class="nav-item">
							<motion.a
								class="nav-link active"
								aria-current="page"
								href="#AboutMe"
								variants={navbarItemMotion}
							>
								About Me
							</motion.a>
						</li>
						<li class="nav-item">
							<motion.a
								class="nav-link"
								href="#Education"
								variants={navbarItemMotion}
							>
								Education
							</motion.a>
						</li>
						<li class="nav-item">
							<motion.a
								class="nav-link"
								href="#Experience"
								variants={navbarItemMotion}
							>
								Experience
							</motion.a>
						</li>

						<li class="nav-item">
							<motion.a
								class="nav-link"
								href="#Projects"
								variants={navbarItemMotion}
							>
								Projects
							</motion.a>
						</li>
					</motion.ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
