import HeaderLink from "./HeaderLink";
import Logo from "./Logo";

const FullWidthHeader = ({ links }) => {
    return (
        <header className="row layout-header sticky-top translucent-white-bg">
            <Logo />
            <div className="d-none d-md-flex col-md-6 justify-content-end align-items-center p-3">
                {links.map((link) => (
                    <HeaderLink key={link.to} link={link} />
                ))}
            </div>
        </header>
    );
};

export default FullWidthHeader;
