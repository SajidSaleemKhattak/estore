import { MapPin, SearchIcon, ShoppingCart } from "lucide-react";

const Header = () => {
  const categories = [
    { name: "Accesories", image: "/hero-images/Accesories.png" },
    { name: "Beauty", image: "/hero-images/Beauty.png" },
    { name: "Electronics", image: "/hero-images/Electronics.png" },
    { name: "Fashion", image: "/hero-images/Fashion.png" },
    { name: "Food and Drinks", image: "/hero-images/Food and Drinks.png" },
    { name: "Furniture", image: "/hero-images/Furniture.png" },
    { name: "Health", image: "/hero-images/Health.png" },
    { name: "Stationary", image: "/hero-images/Stationary.png" },
  ];

  return (
    <div>
      <header className="">
        {/* logo */}
        <div className="flex justify-between">
          <p className="font-bold">e_STORE</p>
          <ShoppingCart className="w-4.5 h-4.5"></ShoppingCart>
        </div>
        <div className="relative">
          <input
            type="search"
            placeholder="Search for your items"
            name=""
            id=""
            className="border-[1.5px] border-gray-300 w-full rounded-sm pl-9 px-3 py-[1.5px] mt-3 "
          />
          <SearchIcon className="w-4.5 h-4.5 text-gray-400 absolute top-[17px] left-[3px]"></SearchIcon>
        </div>
        <div className="mt-4 flex gap-2 items-center">
          <MapPin className="text-orange-800 w-4.5 h-4.5" />
          <p className="text-sm text-orange-800">
            Deliver at: I-8/2 Islamabad, Pakistan
          </p>
        </div>
      </header>
    </div>
  );
};

export default Header;
