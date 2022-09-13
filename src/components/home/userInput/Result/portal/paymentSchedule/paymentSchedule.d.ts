export interface Column {
  id:
    | "Taksit Numarası"
    | "Installment Number"
    | "Taksit Miktarı"
    | "Installment Amount"
    | "Ana Para"
    | "Principal"
    | "Kalan Ana Para"
    | "Remain Principal"
    | "Kar Tutarı"
    | "Profit Amount"
    | "BSMV"
    | "KKDF";
  label: string;
  minWidth?: number;
  align?: "right" | "left";
}

export interface Data {
  IInsNum: number;
  IInsAmount: number;
  Iprincipal: number;
  IremainPrincipal: number;
  IprofitAmount: number;
  Ibsmv: number;
  Ikkdf: number;
}
