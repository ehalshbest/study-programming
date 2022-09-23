import { useTranslation } from "react-i18next";

export interface propsType {
  locale: string;
}

function SelectLocale(props: propsType) {
  let defaultLocale: string = props.locale;

  let [_t, i18n] = useTranslation();

  const changeLocale = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const locale = event.target.value;
    i18n.changeLanguage(locale);
  };

  return (
    <div className="SelectLocale">
      <span>{_t("SelectLocale.언어_변경")} : </span>
      <select onChange={changeLocale} value={defaultLocale}>
        <option value="ko">{_t("SelectLocale.한국어")}</option>
        <option value="en-US">{_t("SelectLocale.영어")}</option>
        <option value="zh-TW">{_t("SelectLocale.중국어")}</option>
      </select>
    </div>
  );
}

export default SelectLocale;
