import Signinbtn from "@/subComponents/Signinbtn";
import { MapPin, SearchIcon } from "lucide-react";

const Header = () => {
  const categories = [
    { name: "Accesories", image: "/heroImages/Accesories.jpg" },
    { name: "Beauty", image: "/heroImages/Beauty.jpg" },
    { name: "Electronics", image: "/heroImages/Electronics.jpg" },
    { name: "Fashion", image: "/heroImages/Fashion.jpg" },
    { name: "Fast Food", image: "/heroImages/fastFood.jpg" },
    { name: "Furniture", image: "/heroImages/Furniture.jpg" },
    { name: "Health", image: "/heroImages/Health.jpg" },
    { name: "Stationary", image: "/heroImages/Stationary.jpg" },
  ];

  return (
    <div>
      <header className="">
        {/* logo */}
        <div className="flex justify-between items-center">
          <p className="font-bold">e_STORE</p>
          <Signinbtn></Signinbtn>
        </div>
        <div className="relative">
          <input
            type="search"
            placeholder="Search for your items"
            name=""
            id=""
            className="border-[1.5px] border-gray-300 w-full rounded-sm pl-9 px-3 py-[1.5px] mt-3 "
          />
          <SearchIcon className="w-4.5 h-4.5 text-gray-400 absolute top-[17px] left-[5px]"></SearchIcon>
        </div>
        <div className="mt-4 flex gap-2 items-center">
          <MapPin className="text-orange-800 w-4.5 h-4.5" />
          <p className="text-sm text-orange-800">
            Deliver at: I-8/2 Islamabad, Pakistan
          </p>
        </div>
        <div className="grid grid-cols-4 mt-5 pl-4">
          {categories.map((element, index) => (
            <div key={index} className="flex flex-col px-0">
              <img
                src={element.image}
                className="w-16 h-16 px-2 py-2 border-[1.5px] border-gray-300 rounded-4xl"
                alt={element.name}
              />
              <p className="text-xs w-full px-2 py-2">{element.name}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default Header;
