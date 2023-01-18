import React, { FC } from "react";
import cn from "classnames";
import { useAppSelector } from "../../app/hooks";
import { selectUserData } from "../../app/modules/auth/selectors";

interface Props {
  isOpen: boolean;
}

const DropMenu: FC<Props> = ({ isOpen }) => {
  const user = useAppSelector(selectUserData);

  console.log(user);

  return (
    <div className="absolute top-0 right-0">
      <div
        className={cn("min-w-[180px] bg-[#181718] duration-200 rounded py-2", {
          "min-w-0 w-0 opacity-0": !isOpen,
        })}
      >
        <div
          className={cn(" rounded-2xl duration-300 flex flex-col gap-2", {
            "opacity-0 pointer-events-none": !isOpen,
          })}
        >
          <span className="border-b mx-4 border-white text-center pb-2 text-[20px] font-bold uppercase">
            User
          </span>
          <div className="px-6 py-2 text-[18px] flex items-center justify-between duration-100 hover:bg-gray-1 cursor-pointer">
            <button>Sign out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropMenu;
