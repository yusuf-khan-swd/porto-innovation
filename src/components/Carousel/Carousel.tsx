import banner1 from '../../assets/banner1.jpg';

const Carousel = () => {
  return (
    <div className="">
      <div className="">
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner1})` }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-white">Arch Design Studio</h1>
              <p className="text-2xl">A Very Personal Approach to Every Client </p>
              <p className="mb-5 text-lg">Elegant Solutions to Complex Problems</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
