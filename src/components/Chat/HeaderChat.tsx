import React, { FC } from "react";
import { ChatHeader } from "../../constants/types";
import Avatar from "../Avatar";
import { AVATAR_SIZES } from "../Avatar/constants";
import { ReactComponent as SettingSVG } from "../../assets/dots.svg";

interface Props {
  data: ChatHeader;
}

const HeaderChat: FC<Props> = ({ data: { title, color } }) => {
  return (
    <div className="h-full flex items-center justify-between">
      <div className="flex items-center justify-between">
        <Avatar titleChat={title} color={color} size={AVATAR_SIZES.XS} />
        <span className="pl-3 font-bold text-lg">{title}</span>
      </div>
      <SettingSVG className="cursor-pointer" />
    </div>
  );
};

export default HeaderChat;
