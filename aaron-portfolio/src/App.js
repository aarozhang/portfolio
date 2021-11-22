import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/navbar";
import Title from "./components/Title/title";
import InfoContainer from "./components/InfoContainer/infoContainer";

function App() {
    return (
        <div class="vh-auto bg-dark text-white">
            {Navbar()}
            {Title()}
            {/*add about me section*/}
            {InfoContainer("Experience")}
            {InfoContainer("Education")}
            {InfoContainer("Projects")}
        </div>
    );
}

export default App;
