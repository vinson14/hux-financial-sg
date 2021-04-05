import HeaderLink from "./HeaderLink";

const HeaderLinks = ({ links }) => {
    return (
        <div className="d-none d-md-flex col-md-6 justify-content-end align-items-center p-3">
            {links.map((link) => (
                <HeaderLink key={link.to} link={link} />
            ))}
        </div>
    );
};

export default HeaderLinks;
