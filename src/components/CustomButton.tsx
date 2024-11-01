import React from "react";
import { AnimatedSubscribeButton } from "./ui/animated-subscribe-button";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

interface Props {
  Message: string;
  color?: string;
  BeforeMessage: string;
  href: string;
}

export default function CustomButton({
  BeforeMessage,
  Message,
  href,
  color = "#ffff",
}: Props) {
  return (
    <a href={href} target="_blank">
      <AnimatedSubscribeButton
        buttonColor={color}
        buttonTextColor="#ffffff"
        subscribeStatus={false}
        initialText={
          <span className="group inline-flex items-center">
            {Message}{" "}
            <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        }
        changeText={
          <span className="group inline-flex items-center">
            <CheckIcon className="mr-2 size-4" />
            {BeforeMessage}{" "}
          </span>
        }
      />
    </a>
  );
}
