import { useEffect, useState } from "react";
import FullWidthHeader from "./FullWidthHeader";
import MobileHeader from "./MobileHeader";
import data from "../static/data.json";

const Header = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    });

    if (isLargeScreen) {
        return <FullWidthHeader links={data.links} />;
    } else {
        return (
            <MobileHeader
                showMenu={showMenu}
                toggleMenu={toggleMenu}
                links={data.links}
            />
        );
    }
};

export default Header;
