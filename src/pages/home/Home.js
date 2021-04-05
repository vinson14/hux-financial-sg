import LightOutlineButton from "../../components/LightOutlineButton";

const Home = () => {
    return (
        <div className="row layout-body home-container">
            <div className="col-12 col-md-6 col-lg-5">
                <div className="home-caption-container p-5 text-white">
                    <h3 className="pri-font-bold text-center">
                        Life is an uphill battle
                    </h3>
                    <h5 className="pri-font text-center my-4">
                        Start your climb with us today
                    </h5>
                    <LightOutlineButton>Contact us</LightOutlineButton>
                </div>
            </div>
        </div>
    );
};

export default Home;
