import React from "react";
import { injectIntl } from "react-intl";
class Home extends React.Component {
  render() {
    const {
      intl: { messages },
    } = this.props;
    return (
      <>
        <p>{messages.home.content}</p>
      </>
    );
  }
}

export default injectIntl(Home);
