export interface IInfoProps {
  principal?: string | null;
  profitRate?: string | null;
  taxRateBSMV?: string | null;
  taxRateKKDF?: string | null;
  numberOfIns?: string | null;
  insInterval?: string | null;
}

export interface IInfoPropsContext {
  info: {
    principal?: string | null;
    profitRate?: string | null;
    taxRateBSMV?: string | null;
    taxRateKKDF?: string | null;
    numberOfIns?: string | null;
    insInterval?: string | null;
  };
  setInfo: React.Dispatch<React.SetStateAction<{}>>;
}

export interface IChildren {
  children: React.ReactNode;
}
