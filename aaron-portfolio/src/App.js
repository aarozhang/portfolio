import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/navbar";
import Title from "./components/Title/title";
import InfoContainer from "./components/InfoContainer/infoContainer";
import info from "./info";

function App() {
    let experience = info.Experience;
    let education = info.Education;
    let projects = info.Projects;

    return (
        <div class="vh-auto bg-dark text-white">
            {Navbar()}
            {Title()}
            {/*add about me section*/}
            {InfoContainer("Experience", experience)}
            {InfoContainer("Education", education)}
            {InfoContainer("Projects", projects)}
            {/*add contact section*/}
        </div>
    );
}

export default App;
