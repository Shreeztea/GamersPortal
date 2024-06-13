const CarouselItem = ({ children, active }) => {
    return (
        <>
            <div className={`carousel-item flex flex-wrap ${active === "active" ? "active" : ""}`}>
                <div className="flex flex-wrap justify-between px-4">
                    {children}
                </div>
            </div>
        </>
    );
};

export default CarouselItem;
