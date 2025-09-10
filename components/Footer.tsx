import { BanknoteArrowUp, Heart, House, User } from "lucide-react";
import React from "react";

const footerItems = [
  { icon: House, label: "Home" },
  { icon: Heart, label: "Wishlist" },
  { icon: BanknoteArrowUp, label: "Transaction" },
  { icon: User, label: "Profile" },
];

const Footer = () => {
  return (
    <div className="flex justify-between items-center mt-5">
      {footerItems.map((item, index) => {
        const Icon = item.icon; // get the component
        return (
          <div
            key={index}
            className="flex flex-col items-center justify-between"
          >
            <Icon className="mb-1 text-gray-400" /> {/* style the icon */}
            <p className="text-sm text-gray-400">{item.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
