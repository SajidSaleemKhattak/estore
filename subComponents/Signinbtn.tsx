"use client";

import { LogIn, ShoppingCart } from "lucide-react";
import { useState } from "react";

const Signinbtn = () => {
  let [click, setClick] = useState(false);
  let handleSignin = () => {};
  return (
    <div>
      <div onClick={handleSignin}>
        {/* <ShoppingCart className="w-4.5 h-4.5"></ShoppingCart> */}
        <div className="flex bg-green-600 gap-1 rounded-sm px-4 py-2 cursor-pointer">
          <p className="text-xs text-white font-bold">Login/Signin</p>
          <LogIn className="w-4.5 h-4.5 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Signinbtn;
