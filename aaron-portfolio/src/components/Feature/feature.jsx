function Feature (organization, role, summary) {
    return (
        <div class="feature col">
            <div class="feature-icon bg-primary bg-gradient"></div>
            <h4>{organization}</h4>
            <p class="lead">{role}</p>
            <p>
                {summary}
            </p>
            <a href="#" class="icon-link">
                See details
            </a>
        </div>
    );
}

export default Feature;