import React from "react";

export const handleScroll = (refElement: React.RefObject<HTMLElement>) => {
  window.scrollTo({
    top: refElement.current!.offsetTop,
    behavior: "smooth",
  });
};
