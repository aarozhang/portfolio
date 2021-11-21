import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/navbar";
import Title from "./components/Title/title";

function Experience() {
    return (
        <div class="container px-4 py-5" id="featured-3">
            <h2 class="pb-2 border-bottom">Experience</h2>
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div class="feature col">
                    <div class="feature-icon bg-primary bg-gradient"></div>
                    <h4>Vanguard</h4>
                    <p class="lead">Application Engineer in Retail API</p>
                    <p>
                        Paragraph of text beneath the heading to explain the heading. We'll add onto
                        it with another sentence and probably just keep going until we run out of
                        words.
                    </p>
                    <a href="#" class="icon-link">
                        See details
                    </a>
                </div>
                <div class="feature col">
                    <div class="feature-icon bg-primary bg-gradient"></div>
                    <h4>UNC Grounds</h4>
                    <p class="lead">Frontend Engineer</p>
                    <p>
                        Paragraph of text beneath the heading to explain the heading. We'll add onto
                        it with another sentence and probably just keep going until we run out of
                        words.
                    </p>
                    <a href="#" class="icon-link">
                        See details
                    </a>
                </div>
                <div class="feature col">
                    <div class="feature-icon bg-primary bg-gradient"></div>
                    <h4>RENCI</h4>
                    <p class="lead">Project Manager</p>
                    <p>
                        Paragraph of text beneath the heading to explain the heading. We'll add onto
                        it with another sentence and probably just keep going until we run out of
                        words.
                    </p>
                    <a href="#" class="icon-link">
                        See details
                    </a>
                </div>
                <div class="feature col">
                    <div class="feature-icon bg-primary bg-gradient"></div>
                    <h4>Second Main Phase</h4>
                    <p class="lead">Software Engineer Intern</p>
                    <p>
                        Paragraph of text beneath the heading to explain the heading. We'll add onto
                        it with another sentence and probably just keep going until we run out of
                        words.
                    </p>
                    <a href="#" class="icon-link">
                        See details
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
            {Title()}
            {Experience()}
        </div>
    );
}

export default App;
