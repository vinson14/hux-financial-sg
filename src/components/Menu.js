import HeaderLink from "./HeaderLink";
import HeaderLinks from "./HeaderLinks";

const Menu = ({ showMenu, links }) => {
    return (
        <div className={`full-page-menu ${showMenu ? "visible" : "invisible"}`}>
            {links.map((link) => (
                <HeaderLink link={link} key={link.to} />
            ))}
        </div>
    );
};

export default Menu;
