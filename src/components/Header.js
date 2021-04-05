import HeaderLinks from "./HeaderLinks";
import data from "../static/data.json";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import MenuIcon from "./MenuIcon";
import Menu from "./Menu";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [largeScreen, setLargeScreen] = useState(false);
    const [scrolledDown, setScrolledDown] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    // Event listener to determine scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolledDown(window.scrollY >= 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    });

    // Event listener to determine screen size
    useEffect(() => {
        console.log("use effect ran");
        const screenResize = () => {
            setLargeScreen(window.innerWidth >= 768);
        };

        window.addEventListener("resize", screenResize);

        return () => {
            window.removeEventListener("resize", screenResize);
        };
    }, [setLargeScreen]);

    const setBackground = () => {
        console.log("this ran");
        return largeScreen || scrolledDown ? "red-bg" : "";
    };

    return (
        <header className={`row layout-header sticky-top ${setBackground()}`}>
            <Logo light={largeScreen || scrolledDown || showMenu} />
            <HeaderLinks links={data.links} />
            <MenuIcon
                toggleMenu={toggleMenu}
                showMenu={showMenu}
                light={showMenu || scrolledDown}
            />
            <Menu showMenu={showMenu} links={data.links} />
        </header>
    );
};

export default Header;
