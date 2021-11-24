import Navbar from "./components/Navbar/navbar";
import Title from "./components/Title/title";
import InfoContainer from "./components/InfoContainer/infoContainer";
import info from "./info";
import AboutMe from "./components/AboutMe/aboutMe";

function App() {
    return (
        <div class="vh-auto bg-dark text-white">
            {Navbar()}
            {Title()}
            {AboutMe("About Me", info["About Me"])}
            {InfoContainer("Education", info.Education)}
            {InfoContainer("Experience", info.Experience)}
            {InfoContainer("Projects", info.Projects)}
            {/*add contact section*/}
        </div>
    );
}

export default App;
