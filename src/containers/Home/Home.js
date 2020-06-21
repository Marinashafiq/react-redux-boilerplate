import React from "react";
import messages from "./../../assets/Local/messages";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    const { lang } = this.props;
    const message = messages[lang];
    return <p>{message.home.content}</p>;
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  };
};

export default connect(mapStateToProps, null)(Home);
