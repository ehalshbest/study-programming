import React from "react";
import { useTranslation } from "react-i18next";
import { FormattedDate } from "react-intl";

export interface propsType {
  locale: string;
}

function Welcome(props: propsType) {
  let [_t, i18n] = useTranslation();

  return (
    <div className="Welecome">
      <span>
        <strong>
          React i18next library {_t("Welcome.선택된_언어")} : {i18n.language}
        </strong>
      </span>
      <div>
        <strong>{_t("Welcome.추가_내용")}</strong>
      </div>
      <h1>{_t("Welcome.환영_합니다", { obj: "React" })}</h1>
      <p>
        <span>
          <strong>
            React Intl library {_t("Welcome.선택된_언어")} : {i18n.language}
          </strong>
          <br />
          <br />
          <strong>
            {_t("Welcome.오늘_날짜")} : <FormattedDate value={new Date()} />
          </strong>
        </span>
      </p>
    </div>
  );
}

export default Welcome;
