import Logo from "./Logo";
import Menu from "./Menu";
import MenuIcon from "./MenuIcon";

const MobileHeader = ({ links, showMenu, toggleMenu }) => {
    return (
        <header className="row layout-mobile-header sticky-top translucent-white-bg">
            <Logo />
            <MenuIcon toggleMenu={toggleMenu} showMenu={showMenu} />
            <Menu links={links} showMenu={showMenu} toggleMenu={toggleMenu} />
        </header>
    );
};

export default MobileHeader;
