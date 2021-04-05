import { NavLink } from "react-router-dom";

const HeaderLink = ({ link }) => {
    return (
        <NavLink
            exact
            to={link.to}
            key={link.to}
            className="header-link pri-font mx-3 my-2 py-1"
        >
            {link.text}
        </NavLink>
    );
};

export default HeaderLink;
