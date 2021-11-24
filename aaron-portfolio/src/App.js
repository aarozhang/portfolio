import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/navbar";
import Title from "./components/Title/title";
import InfoContainer from "./components/InfoContainer/infoContainer";
import info from "./info";
import AboutMe from "./components/AboutMe/aboutMe";

function App() {
    return (
        <div class="vh-auto bg-dark text-white">
            {Navbar()}
            <div
                data-bs-spy="scroll"
                data-bs-target="#navbar"
                data-bs-offset="0"
                class="scrollspy-example"
                tabindex="0"
            >
                {Title()}
                {AboutMe("About Me", info["About Me"])}
                {InfoContainer("Experience", info.Experience)}
                {InfoContainer("Education", info.Education)}
                {InfoContainer("Projects", info.Projects)}
                {/*add contact section*/}
            </div>
        </div>
    );
}

export default App;
