import React from "react";

// deprecated :)

export const focusImput = (obj: any, func: any): void => {
  const arr = Object.entries(obj);

  arr.map((item, idx) => {
    item[1] !== "" &&
      3 < idx &&
      idx < 5 &&
      arr[idx + 1][1] === "" &&
      func(arr[idx + 1][0]);

    if (item[1] !== "" && idx === 5) {
      const arrr = arr.filter((value) => {
        return value[1] === "";
      });
      arrr.length !== 0 && func(arrr[0][0]);
    }
  });
};
