import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./theme";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./store/languageContext";
import { IThemeProvider } from "./store/themeContext";
import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";

function App() {
  return (
    <IThemeProvider>
      <LanguageProvider>
        <ThemeProvider theme={theme}>
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
          <Footer />
          <GlobalStyle />
        </ThemeProvider>
      </LanguageProvider>
    </IThemeProvider>
  );
}

export default App;
