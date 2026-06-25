import Banner from "./Banner";
import FeaturesSection from "./Features/FeaturesSection";
import HowItWorks from "./Features/HowItWorks";
import StatsSection from "./Features/StatsSection";

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