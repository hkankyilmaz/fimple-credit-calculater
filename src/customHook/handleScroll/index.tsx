import React from "react";

export const handleScroll = (refElement: React.RefObject<HTMLElement>) => {
  window.scrollTo({
    top: refElement.current!.offsetTop + -85,
    behavior: "smooth",
  });
};
