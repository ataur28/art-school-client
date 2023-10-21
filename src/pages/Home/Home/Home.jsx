import useTitle from "../../../hook/useTitle";
import Banner from "../Banner/Banner";
import DollCategory from "../DollCategory/DollCategory";
import UserReview from "../UserReview/UserReview";
import PopularClass from "../popularClass/popularClass";
import UpcomingClass from "../UpcomingClass/UpcomingClass";

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <DollCategory></DollCategory>
            <UpcomingClass></UpcomingClass>
            <UserReview></UserReview>
        </div>
    );
};

export default Home;