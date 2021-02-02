import data from "./data.json";
import Section from "./Section";

const Main = () => {
    return (
        <div className="sections">
            {data.map((elem, index) => {
                return (
                    <Section
                        key={index}
                        title={elem.category}
                        picture={elem.images}
                    />
                );
            })}
        </div>
    );
};

export default Main;
