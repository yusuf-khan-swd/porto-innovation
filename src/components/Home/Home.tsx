import Carousel from "../Carousel/Carousel";
import Navbar from "../Navbar/Navbar";
import Stats from "../Stats/Stats";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <Carousel></Carousel>
      <Stats></Stats>
    </div>
  );
};

export default Home;