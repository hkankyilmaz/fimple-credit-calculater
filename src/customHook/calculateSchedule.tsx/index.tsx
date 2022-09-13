import { useContext } from "react";
import IinfoContext from "../../store/inputInfoContext";
import { IinfoSchedule } from "./calculateSchedule";

const CalculateSchedule = () => {
  const { info } = useContext(IinfoContext);

  if (
    typeof info.principal === "string" &&
    typeof info.insInterval === "string" &&
    typeof info.numberOfIns === "string" &&
    typeof info.profitRate === "string" &&
    typeof info.taxRateBSMV === "string" &&
    typeof info.taxRateKKDF === "string"
  ) {
    const profitRate =
      +info.profitRate *
      0.01 *
      (1 + 0.01 * (+info.taxRateBSMV + +info.taxRateKKDF));
    const IinsAmount =
      (+info.principal *
        (profitRate * Math.pow(profitRate + 1, +info.numberOfIns))) /
      (Math.pow(profitRate + 1, +info.numberOfIns) - 1);
    const insNo = 1;
    const insAmount = IinsAmount;
    const profitAmount = +info.principal * 0.01 * +info.profitRate;
    const kkdf = profitAmount * 0.01 * +info.taxRateKKDF;
    const bsmv = profitAmount * 0.01 * +info.taxRateBSMV;
    const Iprincipal = insAmount - profitAmount - kkdf - bsmv;
    const remainPrincipal = +info.principal - Iprincipal;

    const inputProfitRate = +info.profitRate;
    const inputOfkkdf = +info.taxRateKKDF;
    const inputOfbsmv = +info.taxRateBSMV;

    const infoSchedule: IinfoSchedule[] = [
      {
        insNo,
        insAmount,
        Iprincipal,
        remainPrincipal,
        profitAmount,
        kkdf,
        bsmv,
      },
    ];
    console.log(infoSchedule);

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
  }
  return null;
};

export default CalculateSchedule;
