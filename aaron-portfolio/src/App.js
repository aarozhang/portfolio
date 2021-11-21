import "bootstrap/dist/css/bootstrap.min.css";
import headshot from "./headshot2.png";

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

function App() {
    return (
        <div class="vh-auto bg-dark text-white">
            {Title()} {Education()}
        </div>
    );
}

export default App;
