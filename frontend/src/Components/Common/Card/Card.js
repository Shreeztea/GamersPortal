const Card = ({image,title,text,link}) => {
    return (
        <>
            <div className="card" style={{ width: '18rem', fontSize: '18px' }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <a href={link} className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    );
}

export default Card;