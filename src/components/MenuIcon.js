const MenuIcon = ({ toggleMenu, showMenu, light }) => {
    return (
        <div
            onClick={toggleMenu}
            className={`d-md-none menu-icon ${light && "text-white"}`}
        >
            <i className={`fas ${showMenu ? "fa-times" : "fa-bars"}`}></i>
        </div>
    );
};

export default MenuIcon;
