export interface IContextProps {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  text: T;
}

export interface IChildren {
  children: React.ReactNode;
}
