import Feature from "../Feature/feature";

function InfoContainer(header) {
    return (
        <div class="container px-4 py-5" id={header}>
            <h2 class="pb-2 border-bottom">{header}</h2>
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                {Feature("Vanguard", "Application Engineer I", "Some text")}
                {Feature("UNC Grounds", "Frontend Engineer", "Some text")}
                {Feature("RENCI", "Project Manager", "Some text")}
                {Feature("Second Main Phase", "Software Engineer Intern", "Some text")}
            </div>
        </div>
    );
}

export default InfoContainer;