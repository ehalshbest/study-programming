import React from "react";
import "./App.css";
// import "./_Locale/_InitLocale";
import "./_Locale2/_InitLocale";
import { useTranslation } from "react-i18next";
import { IntlProvider } from "react-intl";
import SelectLocale from "./_Component/SelectLocale";
import Welcome from "./_Component/Welcome";

function App() {
  let useTran = useTranslation();
  const locale = useTran.i18n.language;

  return (
    <IntlProvider locale={locale}>
      <div className="App">
        <SelectLocale locale={locale} />
        <Welcome locale={locale} />
      </div>
    </IntlProvider>
  );
}

export default App;
