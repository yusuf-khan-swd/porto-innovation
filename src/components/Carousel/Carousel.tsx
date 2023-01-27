import banner1 from '../../assets/banner1.jpg';

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
    <div className="bg-primary relative">
      <div className="carousel w-[90%] mx-auto max-h-[550px]">
        <div id="slide1" className="carousel-item w-full">
          <img src={banner1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 lg:left-1 lg:right-1 top-1/2 z-50">
            <a href="#slide4" className="btn bg-primary btn-circle">❮</a>
            <a href="#slide2" className="btn bg-primary btn-circle">❯</a>
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
