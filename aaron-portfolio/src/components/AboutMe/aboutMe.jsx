function AboutMe (header, text) {
    return (
        <div class="container px-4 py-5" id="AboutMe">
            <h2 class="pb-2 border-bottom">{header}</h2>
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <p class="lead">{text}</p>
            </div>
        </div>
    );
}

export default AboutMe;