const CarouselBannerImage = ({ image, link, active, label, description }) => {
    return (
        <>
            <div className={`carousel-item ${active === "active" ? "active" : ""}`}>
                <img src={image} className="d-block w-100" alt="..." />
                {label &&
                <div className="carousel-caption d-none d-md-block">
                    <h5>{label}</h5>
                    <p>{description}</p>
                </div>
                }
            </div>

        </>
    );
}

export default CarouselBannerImage;