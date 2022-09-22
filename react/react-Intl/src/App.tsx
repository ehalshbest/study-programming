import React from "react";
import "./App.css";
import Welcome from "./component/Welcome";
import Hello from "./component/Hello";

import { IntlProvider } from "react-intl";
import enUsMsg from "./locale/en-Us.json";
import koMsg from "./locale/ko.json";
import { useState } from "react";

function App() {
  const [locale, setLocale] = useState("ko");
  // let locale = "ko";

  const messages = { "en-US": enUsMsg, ko: koMsg }[locale];

  const changelanguageToKo = () => {
    setLocale("ko");
  };
  const changelanguageToEn = () => {
    setLocale("en-US");
  };

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages}>
        <Welcome />
        <button onClick={changelanguageToKo}>한국어</button>
        <button onClick={changelanguageToEn}>English</button>
        <Hello />
      </IntlProvider>
    </div>
  );
}

export default App;
