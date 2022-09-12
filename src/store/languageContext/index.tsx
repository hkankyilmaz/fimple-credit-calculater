import React, { useState, createContext } from "react";
import { IContextProps, IChildren } from "./languageContext";

const LanguageContext = createContext({} as IContextProps);

export const LanguageProvider = ({ children }: IChildren) => {
  const [language, setLanguage] = useState("turkish");
  const text = {
    language: language,
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
      principalPlaceHolder:
        language === "turkish" ? "Ana Parayı Giriniz" : "Enter The Principal",
      numOfIns:
        language === "turkish" ? "Taksit Sayısı" : "Number Of Instalment",
      numOfInsPlaceHolder:
        language === "turkish"
          ? "Taksit Sayısını Seçiniz"
          : "Choose Number Of Instalment",
      profitRate: language === "turkish" ? "Kar Oranı" : "Profit Rate",
      profitRatePlaceHolder:
        language === "turkish" ? "Kar Oranını Giriniz" : "Enter Profit Rate",
      taxRateBSMV:
        language === "turkish" ? "BSMV Vergi Oranı" : "Tax Rate of BSMV",
      taxRateBSMVPlaceHolder:
        language === "turkish"
          ? "BSMV Vergi Oranını Giriniz"
          : "Enter The Tax Rate of BSMV",
      taxRateKKDF:
        language === "turkish" ? "KKDF Vergi Oranı" : "Tax Rate of KKDF",
      taxRateKKDFPlaceHolder:
        language === "turkish"
          ? "KKDF Vergi Oranını Giriniz"
          : "Enter The Tax Rate of KKDF",
      insInterval:
        language === "turkish" ? "Taksit Aralığı" : "Instalment Interval",
      insIntervalPlaceHolder:
        language === "turkish"
          ? "Taksit Aralığını Seçiniz"
          : "Choose Instalment Interval",
      insIntervalOptOne: language === "turkish" ? "Yıllık" : "Yearly",
      insIntervalOptTwo: language === "turkish" ? "Aylık" : "Montly",
      insIntervalOptThree: language === "turkish" ? "Haftalık" : "Weekly",
      calculateButton: language === "turkish" ? "Hesapla" : "Calculate",
      resetteButton:
        language === "turkish" ? "Formu Sıfırla" : "Reset the Form",
      totalRefund:
        language === "turkish" ? "Toplam Geri Ödeme" : "Total Refund",
      montlyIns: language === "turkish" ? "Aylık Taksit" : "Montly Installment",
      totalTax: language === "turkish" ? "Toplam Vergi" : "Total Tax",

      resultScreen: {
        completedText:
          language === "turkish"
            ? "Hesaplamanız Tamamlandı"
            : "Your Calculate is Completed",
        completeBtn:
          language === "turkish"
            ? "Yeni Kredi Hesapla"
            : "Calculate new Credit",
        showButton:
          language === "turkish"
            ? "Ödeme Planını Göster"
            : "Show Payment Schedule",
      },
      errorField: {
        required:
          language === "turkish" ? "Bu Alan Zorunlu" : "This field is required",
        principal: {
          max:
            language === "turkish"
              ? "En fazla 100000000000 Tl girebilirsiniz "
              : "You can enter a maximum of 100000000000 TL",
          min:
            language === "turkish"
              ? "En ez 100 tl girebilirsiniz"
              : "You can enter at least 100 TL",
          pattern:
            language === "turkish"
              ? "Bu alana sadece sayı girebilirsiniz"
              : "This input is number only",
        },
        profitRate: {
          max:
            language === "turkish"
              ? "En fazla %30 girebilirsiniz"
              : "You can enter up to 30%",
          min:
            language === "turkish"
              ? "En ez %1.1 girebilirsiniz"
              : "You can enter at least 1.1%",
          pattern:
            language === "turkish"
              ? "Bu alana sadece sayı girebilirsiniz"
              : "This input is number only",
        },
        taxRateBSMV: {
          max:
            language === "turkish"
              ? "En fazla %30 girebilirsiniz"
              : "You can enter up to 30%",
          min:
            language === "turkish"
              ? "En ez %1.1 girebilirsiniz"
              : "You can enter at least 1.1%",
          pattern:
            language === "turkish"
              ? "Bu alana sadece sayı girebilirsiniz"
              : "This input is number only",
        },
        taxeRateKKDF: {
          max:
            language === "turkish"
              ? "En fazla %30 girebilirsiniz"
              : "You can enter up to 30%",
          min:
            language === "turkish"
              ? "En ez %1.1 girebilirsiniz"
              : "You can enter at least 1.1%",
          pattern:
            language === "turkish"
              ? "Bu alana sadece sayı girebilirsiniz"
              : "This input is number only",
        },
      },
      alert: {
        success: language === "turkish" ? "İşlem Başarılı" : "Success",
        successTitle:
          language === "turkish"
            ? "Sonuçlarınız Ekrana Yansıtılmıştır"
            : "Results have been displayed",
        fail: language === "turkish" ? "İşlem Başarısız" : "Fail",
        failTitle:
          language === "turkish"
            ? "Lütfen Formu Kontrol Edin"
            : "Please check the form",
      },
      schedule: {
        InsNum:
          language === "turkish" ? "Taksit Numarası" : "Installment Number",
        InsAmount:
          language === "turkish" ? "Taksit Miktarı" : "Installment Amount",
        principal: language === "turkish" ? "Ana Para" : "Principal",
        remainPrincipal:
          language === "turkish" ? "Kalan Ana Para" : "Remain Principal",
        profitAmount: language === "turkish" ? "Kar Tutarı" : "Profit Amount",
        rowPerPage: language === "turkish" ? "Kar Tutarı" : "Profit Amount",
      },
    },
    footer: {
      footerText: language === "turkish" ? " Satır aralığı" : "Rows per page",
    },
  };

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
