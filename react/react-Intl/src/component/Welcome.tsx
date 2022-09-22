import { FormattedMessage, FormattedDate } from "react-intl";

function Welcome() {
  const date: Date = new Date();
  return (
    <div className="welcome">
      <h1>
        <FormattedMessage id="Welcome" />
        React!!
        <FormattedDate value={date} />
      </h1>
    </div>
  );
}

export default Welcome;
