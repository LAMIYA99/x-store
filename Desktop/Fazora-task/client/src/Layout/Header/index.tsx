import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { navbar } from "../../Constants/navbar";
import { CircleUserRound } from "lucide-react";
import SaveToken from "../../Featured/Components/SaveToken";
import { Link } from "@tanstack/react-router";

const Header = () => {
  return (
    <div className="flex items-center justify-center mx-auto max-w-[1200px] p-3 relative z-99999">
      <div className="grid grid-cols-2 justify-between w-full items-center">
        <div className="w-[70px] h-auto overflow-hidden">
          <img
            src="https://cdn.prod.website-files.com/68c0e3e4af3be748783bb0f3/68c0fe6624508c7f0f8a163e_c230208425afdc760621f0c683c3f941_Logo%20%285%29.svg"
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="flex items-center justify-end gap-2">
          <SignedOut>
            <SignInButton mode="modal">
              <div className="cursor-pointer bg-[#343d41] border-[3px] border-[#f9e7ea] rounded-full p-[9px]">
                <CircleUserRound size={20} color="white" />
              </div>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <SaveToken />
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "avatar-box",
                  userButtonAvatarImage: "avatar-image",
                },
              }}
            />
          </SignedIn>
          <button className="bg-[#343d41] text-[14px] font-light border-[3px] border-[#f9e7ea] rounded-[99px] text-white px-6 py-[9px]">
            Get Started
          </button>
        </div>
      </div>
      <div className="fixed bottom-0 w-full flex  items-center justify-center z-9999 py-5">
        <ul className="flex items-center justify-center max-w-[600px] p-2 rounded-[99px] bg-[#111418] gap-1 ">
          {navbar &&
            navbar?.map((item) => (
              <Link to={item?.path}>
                <li
                  key={item?.id}
                  className="text-[#cacbd4] text-[14px] py-1 px-3 font-light hover:bg-[#f9f9f9] hover:text-[#1c1e1f] rounded-[99px] duration-200 cursor-pointer"
                >
                  {item?.name}
                </li>
              </Link>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
