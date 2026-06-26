import Banner from "../../Components/Home/Banner";
import CareerCTA from "../../Components/Home/CareerCTA";
import FAQ from "../../Components/Home/FAQ";
import FeaturesSection from "../../Components/Home/FeaturesSection";
import HowItWorks from "../../Components/Home/HowItWorks";
import StatsSection from "../../Components/Home/StatsSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <CareerCTA></CareerCTA>
            <StatsSection></StatsSection>
            <FeaturesSection></FeaturesSection>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;