const Picture = ({ image }) => {
    return (
        <div>
            <img className="film" src={image} alt="affiche-film" />
        </div>
    );
};

export default Picture;
