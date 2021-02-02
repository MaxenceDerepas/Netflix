import Picture from "./Picture";
const Section = ({ title, picture }) => {
    console.log(picture);
    return (
        <div>
            <h1>{title}</h1>
            <div className="picture">
                {picture.map((elem, index) => {
                    return (
                        <div>
                            <Picture key={index} image={elem} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Section;
