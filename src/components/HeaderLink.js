import { NavLink } from "react-router-dom";

const HeaderLink = ({ link, onClick }) => {
    return (
        <NavLink
            exact
            onClick={onClick}
            to={link.to}
            key={link.to}
            className="header-link pri-font mx-3 my-2 py-1"
        >
            {link.text}
        </NavLink>
    );
};

export default HeaderLink;
