import StarRating from "@/subComponents/StarRating";

const Hero = async () => {
  const res = await fetch("http://127.0.0.1:5000/api/products", {
    cache: "no-store",
  });
  const products = await res.json();
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
      <div className="flex justify-between items-center mt-5">
        <p className="">
          <span className="font-semibold">Todays best deals for you</span>
        </p>
        <p className="text-black-500">See all</p>
      </div>

      {/* Some Products From the Backend */}
      <div className="flex gap-5 w-full overflow-x-auto flex-nowrap p-2 ">
        {products.map((product: any, index: number) => (
          <div className="mt-4 w-40 flex-shrink-0 h-full" key={index}>
            <div className="flex bg-blue-100 items-center justify-center py-5 rounded">
              <img
                className="w-19 h-19"
                src={product.thumbnail}
                alt={product.title}
              />
            </div>

            <p className="text-xs text-gray-500 mt-3">{product.title}</p>
            <div className="flex gap-2 items-center justify-items-center ">
              <StarRating rating={product.rating} />
              <p className="text-xs">({product.rating})</p>
            </div>
            <p className="text-xs mt-1 font-semibold">USD {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
