import React from "react";
import messages from "../../../assets/Local/messages";
import { connect } from "react-redux";
import { SelectComponent } from "../../../components/Controls/Select/Select";
import { InputField } from "../../../components/Controls/InputField/InputField";
import { CheckboxComponent } from "../../../components/Controls/Checkbox/Checkbox";
import { DateField } from "../../../components/Controls/DateField/DateField";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 10,
      course_name: "",
      description: "",
      isSponsered: false,
      date: null,
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value || e.target.checked,
    });
  };

  handleDateChange = (date, name) => {
    this.setState({
      ...this.state,
      [name]: date,
    });
  };

  render() {
    const {
      category,
      course_name,
      description,
      isSponsered,
      date,
    } = this.state;
    const { lang } = this.props;
    const message = messages[lang];
    const list = [
      {
        id: 1,
        value: 10,
        content: "Ten",
      },
      {
        id: 1,
        value: 20,
        content: "Twenty",
      },
      {
        id: 1,
        value: 30,
        content: "Thirty",
      },
    ];
    return (
      <>
        <div className="row mx-auto">
          <div className="col-md-6">
            <SelectComponent
              list={list}
              value={category}
              label={"الجامعة"}
              isMultiple={false}
              handleChange={this.handleChange}
              name="category"
            />
          </div>
          <div className="col-md-6">
            <InputField
              name="course_name"
              id="course_name"
              label="course_name"
              value={course_name}
              changeHandler={this.handleChange}
              isRequired={true}
            />
          </div>
          <div className="col-md-12">
            <InputField
              name="description"
              id="description"
              label="description"
              value={description}
              changeHandler={this.handleChange}
              isRequired={true}
              isMultiline={true}
            />
          </div>
          <div className="col-md-6">
            <CheckboxComponent
              isChecked={isSponsered}
              handleChange={this.handleChange}
              name="isSponsered"
              content="Sponsered"
            />
          </div>
          <div className="col-md-6">
            <DateField
              value={date}
              label={"التاريخ"}
              name="date"
              handleChange={this.handleDateChange}
              isRequired={true}
            />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  };
};

export default connect(mapStateToProps, null)(Home);
