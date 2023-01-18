import React, { FC } from "react";
import cn from "classnames";

interface IProps {
  userName: string;
  message: string;
  time: string;
}

const MessageItem: FC<IProps> = ({ userName, message, time }) => {
  return (
    <div
      className={cn("flex justify-between items-center my-1 ", {
        "flex-row-reverse": userName === "User",
      })}
    >
      <div
        className={cn("flex flex-col px-3 py-3", {
          "text-right rounded-l-lg rounded-br-lg bg-message-0":
            userName === "User",
          "rounded-r-lg rounded-tl-lg bg-message-1": userName !== "User",
        })}
      >
        <span className="font-bold">{userName}</span>
        <span>{message}</span>
      </div>
      <span className="text-gray-0 text-sm">{time}</span>
    </div>
  );
};

export default MessageItem;
