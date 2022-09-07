import React from "react";
import $ from "jquery";

export const handleTheme = (
  className: string,
  Itheme: string,
  setITheme: React.Dispatch<React.SetStateAction<string>>
) => {
  if (className === "light-btn") {
    if (!$(".light-btn")!.hasClass("active")) {
      $(".light-btn")!.addClass("active");
      $(".dark-btn")!.removeClass("active");
      $("body").css("backgroundColor", "#f2f2f2");
      Itheme !== "light" && setITheme("light");
    }
  }
  if (className === "dark-btn") {
    if (!$(".dark-btn")!.hasClass("active")) {
      $(".light-btn")!.removeClass("active");
      $(".dark-btn")!.addClass("active");
      $("body").css("backgroundColor", "#48556a");
      Itheme !== "dark" && setITheme("dark");
    }
  }
};
