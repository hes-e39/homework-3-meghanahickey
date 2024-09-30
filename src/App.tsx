import colorData from '../public/colors.json';

type Color = {
    hex: string;
    name: string;
    comp: { hex: string; name: string }[];
};

const App = () => {
    return colorData.map((color: Color) => {
        return (
            <div key={color.hex}>
                <div>{color.name}: {color.hex} </div>
            </div>
        );
    });
};

export default App;
