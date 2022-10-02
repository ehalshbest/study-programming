import React from "react";
import "./App.css";
// import "./_Locale/_InitLocale";
import "./_Locale2/_InitLocale";
import { useTranslation } from "react-i18next";
import { IntlProvider } from "react-intl";
import SelectLocale from "./_Component/SelectLocale";
import Welcome from "./_Component/Welcome";

// import { GoogleSpreadsheet } from "google-spreadsheet";

// async function setup() {
//   const doc = new GoogleSpreadsheet(
//     "173c-5bfXD5mGRFVX9jS5-xGUj0vsoQiMCqug9UnNf_A"
//   ); // Obviously putting in my real spreadsheet id and data instead of this in my real code
//   console.log(doc);

//   const creds = require("./steadfast-helix-363407-68bca1736bdc.json");
//   console.log(creds);
//   await doc.useServiceAccountAuth(creds);

//   // await doc.useServiceAccountAuth({
//   //   client_email: "id-692@steadfast-helix-363407.iam.gserviceaccount.com",
//   //   private_key: "68bca1736bdc4f06931f0b9640792785631b70b0",
//   // });

//   await doc.loadInfo(); // loads document properties and worksheets

//   // const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
//   const sheet = doc.sheetsById[1336106559];
//   console.log(sheet.title);
//   console.log(sheet.rowCount);

//   const rows = await sheet.getRows();
//   console.log(rows);

//   const columnKeyToHeader = {
//     key: "키",
//     "ko-KR": "한글",
//     "en-US": "영어",
//     "zh-TW": "중국어(번체)",
//   };

//   const exsitKeys = {};
//   const addedRows = [];
//   rows.forEach((row) => {
//     console.log(row);
//     const key = row[columnKeyToHeader.key];
//     console.log(key);
//   });
// }

// setup();

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
