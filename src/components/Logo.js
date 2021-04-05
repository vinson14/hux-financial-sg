import lightLogo from "../static/logos/light.png";
import darkLogo from "../static/logos/dark.png";
import { Link } from "react-router-dom";

const Logo = ({ light }) => {
    return (
        <Link to="/">
            <img
                src={light ? lightLogo : darkLogo}
                alt="Hux Financials Icon"
                height="75"
                className="logo"
            />
        </Link>
    );
};

export default Logo;
