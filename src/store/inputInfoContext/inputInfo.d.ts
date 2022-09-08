export interface IInfoProps {
  principal?: number | null;
  profitRate?: number | null;
  taxRateBSMV?: number | null;
  taxRateKKDF?: number | null;
  numberOfIns?: number | null;
  insInterval?: string | null;
}

export interface IInfoPropsContext {
  info: {
    principal?: number | null;
    profitRate?: number | null;
    taxRateBSMV?: number | null;
    taxRateKKDF?: number | null;
    numberOfIns?: number | null;
    insInterval?: string | null;
  };
  setInfo: React.Dispatch<React.SetStateAction<{}>>;
}

export interface IChildren {
  children: React.ReactNode;
}
