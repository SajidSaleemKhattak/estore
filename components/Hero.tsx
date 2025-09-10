const Hero = () => {
  const bannerImages = [
    { img: "/bannerImages/bannerImage1.jpg" },
    { img: "/bannerImages/bannerImage2.jpg" },
  ];
  return (
    <div className="flex flex-col mt-5">
      <img
        src={bannerImages[1].img}
        alt="bannerImage"
        className="rounded-xl w-full h-3/6 "
      />
      <div className="flex justify-between items-center">
        <p className="mt-5">
          <span className="font-semibold">Flash Sale</span>
        </p>
        <p className="text-orange-500">See all</p>
      </div>

      {/* Some Products From the Backend */}
    </div>
  );
};

export default Hero;
