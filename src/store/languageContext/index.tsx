import React, { useState, createContext } from "react";
import { IContextProps, IChildren } from "./languageContext";

const LanguageContext = createContext({} as IContextProps);

export const LanguageProvider = ({ children }: IChildren) => {
  const [language, setLanguage] = useState("turkish");
  const [text, setText] = useState({
    header: {
      themeButtonOne: language === "turkish" ? "Açık" : "Light",
      themeButtonTwo: language === "turkish" ? "Koyu" : "Dark",
      langButtonOne: "TR",
      langButtonTwo: "ENG",

      title:
        language === "turkish"
          ? "Kredinizi Hesaplayın"
          : "Calculate Your Credit",
      description:
        language === "turkish"
          ? "Kolay bir şekilde kredinizi tüm ayrıntılarıyla hesaplayın ve ödene planınızı görün."
          : "Calculate and see your payment schedule with the easy-to-use credit calculater.",
    },
    home: {
      startButton: language === "turkish" ? "Hesaplamaya Başla" : "Get Started",
      principal: language === "turkish" ? "Ana Para" : "Principal",
      numOfIns:
        language === "turkish" ? "Taksit Sayısı" : "Number Of Installment",
      profitRate: language === "turkish" ? "Kar Oranı" : "Profit Rate",
      insInterval:
        language === "turkish" ? "Taksit Aralığı" : "Installment Interval",
      taxRate: language === "turkish" ? "Vergi Oranı" : "Tax Rate",
      calculateButton: language === "turkish" ? "Hesapla" : "Calculate",
      totalRefund:
        language === "turkish" ? "Toplam Geri Ödeme" : "Total Refund",
      montlyIns: language === "turkish" ? "Aylık Taksit" : "Montly Installment",
      totalTax: language === "turkish" ? "Toplam Vergi" : "Total Tax",
      showButton:
        language === "turkish"
          ? "Ödeme Planını Göster"
          : "Show Payment Schedule",
    },
    footer: {
      footerText: language === "turkish" ? " 2022 CalCredit" : "2022 CalCredit",
    },
  });

  const value = {
    language,
    setLanguage,
    text,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
