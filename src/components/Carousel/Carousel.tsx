import banner1 from '../../assets/banner1.jpg';

const Carousel = () => {
  return (
    <div className="bg-primary h-[500px]">
      <div className="w-[90%] mx-auto pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white">
          <div className="">
            <figure className="w-full"><img src={banner1} className="h-[530px]" alt="Album" /></figure>
          </div>
          <div className="bg-[#6c6e70] text-white flex flex-col items-center pt-20">
            <div className=" text-right pr-8">
              <h2 className="text-5xl font-bold mb-2">Arch Design Studio</h2>
              <p className="text-xl">A Very Personal Approach to Every Client</p>
              <p className="mb-8">Elegant Solutions to Complex Problems</p>
              <div className="">
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
