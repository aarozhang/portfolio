import "bootstrap/dist/css/bootstrap.min.css";
import headshot from "./headshot3.jpg";

function Navbar() {
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
                            <a class="nav-link" href="#">
                                Education
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Experience
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
}

function Title() {
    return (
        <div class="container col-xxl-8 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-6">
                    <img
                        src={headshot}
                        class="d-block mx-lg-auto img-fluid rounded-circle"
                        alt="Headshot"
                        width="500"
                        height="300"
                        loading="lazy"
                    ></img>
                </div>
                <div class="col-lg-6">
                    <h1 class="display-2 fw-bold lh-1 mb-3">Hi! I'm Aaron.</h1>
                    <p class="lead">Software engineer from Charlotte.</p>
                </div>
            </div>
        </div>
    );
}

function Education() {
    return (
        <div class="container px-4 py-5" id="featured-3">
            <h2 class="pb-2 border-bottom">Experience</h2>
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div class="feature col">
                    <div class="feature-icon bg-primary bg-gradient"></div>
                    <h2>Featured title</h2>
                    <p>
                        Paragraph of text beneath the heading to explain the heading. We'll add onto
                        it with another sentence and probably just keep going until we run out of
                        words.
                    </p>
                    <a href="#" class="icon-link">
                        Call to action
                    </a>
                </div>
                <div class="feature col">
                    <div class="feature-icon bg-primary bg-gradient"></div>
                    <h2>Featured title</h2>
                    <p>
                        Paragraph of text beneath the heading to explain the heading. We'll add onto
                        it with another sentence and probably just keep going until we run out of
                        words.
                    </p>
                    <a href="#" class="icon-link">
                        Call to action
                    </a>
                </div>
                <div class="feature col">
                    <div class="feature-icon bg-primary bg-gradient"></div>
                    <h2>Featured title</h2>
                    <p>
                        Paragraph of text beneath the heading to explain the heading. We'll add onto
                        it with another sentence and probably just keep going until we run out of
                        words.
                    </p>
                    <a href="#" class="icon-link">
                        Call to action
                    </a>
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <div class="vh-auto bg-dark text-white">
            {Navbar()}
            {Title()} {Education()}
        </div>
    );
}

export default App;
