import React from "react";

export const focusImput = (obj: any, func: any): void => {
  const arr = Object.entries(obj);

  arr.map((item, idx) => {
    item[1] !== "" &&
      1 < idx &&
      idx < 4 &&
      arr[idx + 1][1] === "" &&
      func(arr[idx + 1][0]);

    if (item[1] !== "" && idx === 4) {
      const arrr = arr.filter((value) => {
        return value[1] === "";
      });
      arrr.length !== 0 && func(arrr[0][0]);
    }
  });
};
