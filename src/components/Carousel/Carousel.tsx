import banner1 from '../../assets/banner3.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner1.jpg';
import banner4 from '../../assets/banner4.jpg';
import './CarouselItem.css';

const Carousel = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="carousel-img">
          <img src={banner1} className="w-full" />
        </div>
        <div className="text-white bg-transparent absolute w-full top-0">
          <div className="p-2 text-sm sm:text-lg text-center md:text-right md:mt-24 md:mr-24">
            <h2 className="text-2xl md:text-5xl font-bold mb-2">Arch Design Studio</h2>
            <p className="md:text-lg mb-1">A Very Personal Approach to Every Client</p>
            <p className="mb-4 sm:mb-8">Elegant Solutions to Complex Problems</p>
            <div className="">
              <button className="btn btn-primary rounded-none btn-sm md:btn-md">Get Started</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="carousel-img">
          <img src={banner2} className="w-full" />
        </div>
        <div className="text-white bg-transparent absolute w-full top-0">
          <div className="p-2 text-sm sm:text-lg text-center md:text-right md:mt-24 md:mr-24">
            <h2 className="text-2xl md:text-5xl font-bold mb-2">Arch Design Studio</h2>
            <p className="md:text-lg mb-1">A Very Personal Approach to Every Client</p>
            <p className="mb-4 sm:mb-8">Elegant Solutions to Complex Problems</p>
            <div className="">
              <button className="btn btn-primary rounded-none btn-sm md:btn-md">Get Started</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="carousel-img">
          <img src={banner3} className="w-full" />
        </div>
        <div className="text-white bg-transparent absolute w-full top-0">
          <div className="p-2 text-sm sm:text-lg text-center md:text-right md:mt-24 md:mr-24">
            <h2 className="text-2xl md:text-5xl font-bold mb-2">Arch Design Studio</h2>
            <p className="md:text-lg mb-1">A Very Personal Approach to Every Client</p>
            <p className="mb-4 sm:mb-8">Elegant Solutions to Complex Problems</p>
            <div className="">
              <button className="btn btn-primary rounded-none btn-sm md:btn-md">Get Started</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div className="carousel-img">
          <img src={banner4} className="w-full" />
        </div>
        <div className="text-white bg-transparent absolute w-full top-0">
          <div className="p-2 text-sm sm:text-lg text-center md:text-right md:mt-24 md:mr-24">
            <h2 className="text-2xl md:text-5xl font-bold mb-2">Arch Design Studio</h2>
            <p className="md:text-lg mb-1">A Very Personal Approach to Every Client</p>
            <p className="mb-4 sm:mb-8">Elegant Solutions to Complex Problems</p>
            <div className="">
              <button className="btn btn-primary rounded-none btn-sm md:btn-md">Get Started</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
