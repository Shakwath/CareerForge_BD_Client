import Banner from "../../Components/Home/Banner";
import FeaturesSection from "../../Components/Home/FeaturesSection";
import HowItWorks from "../../Components/Home/HowItWorks";
import StatsSection from "../../Components/Home/StatsSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <StatsSection></StatsSection>
            <FeaturesSection></FeaturesSection>
        </div>
    );
};

export default Home;