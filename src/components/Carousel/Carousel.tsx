import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';

const Carousel = () => {
  return (
    <div className="carousel w-full mx-auto">
      <div id="slide1" className="carousel-item relative w-full bg-primary">
        <div className="w-[90%] mx-auto">
          <figure className="w-full opacity-30"><img src={banner1} /></figure>
          <div className="text-white bg-transparent absolute top-14 right-24">
            <div className="text-left sm:text-right">
              <h2 className="md:text-5xl font-bold mb-2">Arch Design Studio</h2>
              <p className="md:text-lg mb-1">A Very Personal Approach to Every Client</p>
              <p className="mb-4 sm:mb-8">Elegant Solutions to Complex Problems</p>
              <div className="">
                <button className="btn btn-primary rounded-none">Get Started</button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform top-1/2 left-0 right-0">
          <a href="#slide4" className="btn bg-primary btn-circle">❮</a>
          <a href="#slide2" className="btn bg-primary btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
