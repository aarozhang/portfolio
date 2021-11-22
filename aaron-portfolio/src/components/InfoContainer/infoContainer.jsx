import Feature from "../Feature/feature";

function renderFeatures(object){
    let renderedFeatures = [];
    object.forEach(feature => {
        renderedFeatures.push(Feature(feature.title, feature.subtitle, feature.summary));
    });

    return renderedFeatures;
}

function InfoContainer(header, object) {
    return (
        <div class="container px-4 py-5" id={header}>
            <h2 class="pb-2 border-bottom">{header}</h2>
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                {renderFeatures(object)}
            </div>
        </div>
    );
}

export default InfoContainer;