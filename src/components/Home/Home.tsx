import Carousel from "../Carousel/Carousel";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import Stats from "../Stats/Stats";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <Carousel></Carousel>
      <Services></Services>
      <Stats></Stats>
    </div>
  );
};

export default Home;