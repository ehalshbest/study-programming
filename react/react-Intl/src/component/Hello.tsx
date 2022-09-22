import { FormattedMessage, FormattedDate } from "react-intl";

export default function Hello() {
  const date: Date = new Date();
  return (
    <div className="hello">
      <h1>
        <FormattedMessage id="Hello" />
        <FormattedDate value={date} />
      </h1>
    </div>
  );
}
