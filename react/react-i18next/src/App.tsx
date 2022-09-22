import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const changelanguageToKo = () => i18n.changeLanguage("ko");
  const changelanguageToEn = () => i18n.changeLanguage("en");

  return (
    <div className="App">
      <span>language : {i18n.language}</span>
      <h1>{t("AAA.BBB.Welcome")}</h1>
      <button onClick={changelanguageToKo}>한국어</button>
      <button onClick={changelanguageToEn}>English</button>
    </div>
  );
}

export default App;
