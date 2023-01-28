import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';

const Carousel = () => {
  return (
    // <div className="bg-primary h-[500px]">
    //   <div className="w-[90%] mx-auto pt-8">
    //     <div className="grid grid-cols-2 bg-white">
    //       <div className="">
    //         <figure className="w-full"><img src={banner1} className="h-[530px]" alt="Album" /></figure>
    //       </div>
    //       <div className="bg-[#6c6e70] text-white flex flex-col items-center pt-20">
    //         <div className=" text-right pr-8">
    //           <h2 className="text-5xl font-bold mb-2">Arch Design Studio</h2>
    //           <p className="text-xl">A Very Personal Approach to Every Client</p>
    //           <p className="mb-8">Elegant Solutions to Complex Problems</p>
    //           <div className="">
    //             <button className="btn btn-primary">Get Started</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-primary">
      <div className="carousel w-[88%] mx-auto max-h-[560px] min-h-[350px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner1} className="w-full opacity-30" />
          <div className="absolute text-white bg-transparent  sm:right-9 md:right-12 lg:right-11 p-6">
            <div className="text-center sm:text-right mt-24 mb-16 pr-8">
              <h2 className="md:text-5xl font-bold mb-2">Arch Design Studio</h2>
              <p className="md:text-lg mb-1">A Very Personal Approach to Every Client</p>
              <p className="mb-8">Elegant Solutions to Complex Problems</p>
              <div className="">
                <button className="btn btn-primary rounded-none">Get Started</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 lg:left-3 lg:right-3 top-1/2 z-50">
            <a href="#slide4" className="btn bg-primary btn-circle">❮</a>
            <a href="#slide2" className="btn bg-primary btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full opacity-30" />
          <div className="absolute text-white bg-transparent  sm:right-9 md:right-12 lg:right-11 p-6">
            <div className="text-center sm:text-right mt-24 mb-16 pr-8">
              <h2 className="md:text-5xl font-bold mb-2">Arch Design Studio</h2>
              <p className="md:text-lg mb-1">A Very Personal Approach to Every Client</p>
              <p className="mb-8">Elegant Solutions to Complex Problems</p>
              <div className="">
                <button className="btn btn-primary rounded-none">Get Started</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2 z-50">
            <a href="#slide1" className="btn bg-primary btn-circle">❮</a>
            <a href="#slide3" className="btn bg-primary btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full opacity-30" />
          <div className="absolute text-white bg-transparent  sm:right-9 md:right-12 lg:right-11 p-6">
            <div className="text-center sm:text-right mt-24 mb-16 pr-8">
              <h2 className="md:text-5xl font-bold mb-2">Arch Design Studio</h2>
              <p className="md:text-lg mb-1">A Very Personal Approach to Every Client</p>
              <p className="mb-8">Elegant Solutions to Complex Problems</p>
              <div className="">
                <button className="btn btn-primary rounded-none">Get Started</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 lg:left-3 lg:right-3 top-1/2 z-50">
            <a href="#slide2" className="btn bg-primary btn-circle">❮</a>
            <a href="#slide1" className="btn bg-primary btn-circle">❯</a>
          </div>
        </div>

        {/* <div id="slide2" className="carousel-item relative w-full">
          <img src={banner1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Carousel;
