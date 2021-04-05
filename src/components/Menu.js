import HeaderLink from "./HeaderLink";

const Menu = ({ showMenu, links, toggleMenu }) => {
    return (
        <div className={`full-page-menu ${showMenu ? "visible" : "invisible"}`}>
            {links.map((link) => (
                <HeaderLink link={link} key={link.to} onClick={toggleMenu} />
            ))}
        </div>
    );
};

export default Menu;
