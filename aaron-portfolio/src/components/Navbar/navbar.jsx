function Navbar () {
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
                            <a class="nav-link active" aria-current="page" href="#Welcome">
                                Welcome
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#About Me">
                                About me
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#Experience">
                                Experience
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#Education">
                                Education
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#Projects">
                                Projects
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#Contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;