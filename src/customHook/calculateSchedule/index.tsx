import { useContext } from "react";
import IinfoContext from "../../store/inputInfoContext";
import { IinfoSchedule } from "./calculateSchedule";

export const CalculateSchedule = () => {
  const { info } = useContext(IinfoContext);

  if (
    typeof info.principal === "string" &&
    typeof info.insInterval === "string" &&
    typeof info.numberOfIns === "string" &&
    typeof info.profitRate === "string" &&
    typeof info.taxRateBSMV === "string" &&
    typeof info.taxRateKKDF === "string"
  ) {
    
    // installment amount and interest rate
    const profitRate = +info.profitRate * 0.01 * (1 + 0.01 * (+info.taxRateBSMV + +info.taxRateKKDF));
    const IinsAmount = (+info.principal * (profitRate * Math.pow(profitRate + 1, +info.numberOfIns))) /(Math.pow(profitRate + 1, +info.numberOfIns) - 1);
           
    //first row of payment schedule
    const insNo = 1;
    const insAmount = IinsAmount;
    const profitAmount = +info.principal * 0.01 * +info.profitRate;
    const kkdf = profitAmount * 0.01 * +info.taxRateKKDF;
    const bsmv = profitAmount * 0.01 * +info.taxRateBSMV;
    const Iprincipal = insAmount - profitAmount - kkdf - bsmv;
    const remainPrincipal = +info.principal - Iprincipal;

    // defination for calculate other row
    const inputProfitRate = +info.profitRate;
    const inputOfkkdf = +info.taxRateKKDF;
    const inputOfbsmv = +info.taxRateBSMV;

    const infoSchedule: IinfoSchedule[] = [
        
      { insNo,insAmount, Iprincipal, remainPrincipal, profitAmount,kkdf,bsmv },
           
    ];

    
    // calcculation others raw---(schedule)  from first row
    Array(+info.numberOfIns)
      .fill("")
      .map((item, idx) => {
        const insNo = infoSchedule[idx].insNo + 1;
        const insAmount = infoSchedule[idx].insAmount;
        const profitAmount =
          infoSchedule[idx].remainPrincipal * 0.01 * inputProfitRate;
        const kkdf = profitAmount * 0.01 * inputOfkkdf;
        const bsmv = profitAmount * 0.01 * inputOfbsmv;
        const Iprincipal = IinsAmount - profitAmount - kkdf - bsmv;
        const remainPrincipal =
          infoSchedule[idx].remainPrincipal - Iprincipal < 0
            ? 0
            : infoSchedule[idx].remainPrincipal - Iprincipal;

        infoSchedule.push({
          insNo,
          insAmount,
          Iprincipal,
          remainPrincipal,
          profitAmount,
          kkdf,
          bsmv,
        });
      });

    //get ride of the last one because we defined firs raw on the top page
    infoSchedule.pop();

    return infoSchedule;
  }
};

    // calculate for first result screen
export const calculatedValues = () => {
  const infoValues = CalculateSchedule();
  if (infoValues !== undefined) {
    const totalRefund = infoValues[0].insAmount * infoValues.length;
    const insAmound = infoValues[0].insAmount;
    let totalTax = 0;
    infoValues.map((payment) => {
      totalTax += payment.profitAmount + payment.bsmv + payment.kkdf;
    });

    return [totalRefund, insAmound, totalTax];
  } else return null;
};
