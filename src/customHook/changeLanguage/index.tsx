import React from "react";
import $ from "jquery";

export const handleLanguage = (
  className: string,
  language: string,
  setLanguage: React.Dispatch<React.SetStateAction<string>>
) => {
  if (className === "tr-btn") {
    if (!$(".tr-btn").hasClass("active")) {
      $(".tr-btn")!.addClass("active");
      $(".eng-btn")!.removeClass("active");
      language !== "turkish" && setLanguage("turkish");
    }
  }
  if (className === "eng-btn") {
    if (!$(".eng-btn").hasClass("active")) {
      $(".eng-btn")!.addClass("active");
      $(".tr-btn")!.removeClass("active");
      language !== "english" && setLanguage("english");
    }
  }
};
