import React from "react";
import "../css/bootstrap.min.css";
import "../js/bootstrap.min.js";
import "../js/jquery.min.js";
import "../js/popper.min.js";
import Nlist from "../List/Lists.component";
import FormInput from "../Input/Input.component";
import "./ListContainer.css";
import jQuery from "jquery";

class Contain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      dec: []
    };
  }
  takeValue = (e) => {
    if (e.keyCode === 13 && e.target.value !== "") {
      const str = {
        id: Math.random(),
        var: e.target.value
      };
      this.setState({
        dec: [...this.state.dec, str]
      });
      e.target.value = "";
    }
  };
  delete = (key) => {
    const list = [...this.state.dec];
    const updateList = list.filter((item) => item.id !== key);
    this.setState({
      dec: updateList
    });
  };
  btnShow = () => {
    // jQuery(function () {
    //   // jQuery("#showall").click(function () {
    //jQuery("#button").show();
    //   // });
    // });
    // // this.setState({ isActive: true });
    // //alert("show");
  };
  btnHide = () => {
    // jQuery(function () {
    // jQuery("#button").hide();
    //   // this.setState({ isActive: false });
    //   // alert("hide");
    // });
  };
  render() {
    return (
      <div className="row d-flex justify-content-center mt-5">
        <div className="d-inline-flex mt-5">
          <div className="container mt-5">
            <div className="container-sm ">
              <ul className="list-group ">
                <div>
                  <FormInput
                    keyDownHandler={this.takeValue.bind(this)}
                    typeText="text"
                    placeholderText="Enter Data"
                  />
                </div>
                {/* <Nlist /> */}
                {this.state.dec.map((element) => (
                  <Nlist
                    content={element.var}
                    id="button"
                    show={this.btnShow}
                    hide={this.btnHide}
                    click={() => this.delete(element.id)}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contain;
