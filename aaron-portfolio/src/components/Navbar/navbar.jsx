function Navbar () {
    return (
        <nav
            class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
            aria-label="Tenth navbar example"
        >
            <div class="container-fluid">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarsExample08"
                    aria-controls="navbarsExample08"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div
                    class="collapse navbar-collapse justify-content-md-center"
                    id="navbarsExample08"
                >
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                Welcome
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">
                                About me
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Experience
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Education
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Projects
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
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