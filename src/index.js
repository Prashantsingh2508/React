import React from "react";
import Footer from "./component/Footer/Footer.component";
import Nav from "./component/Navigation/Navbar.component";
import ReactDOM from "react-dom";
import Contain from "./component/ListContainer/ListContainer.component";
const Main = () => {
  return (
    <div>
      <Footer />
      <Nav />
      <Contain />
    </div>
  );
};
ReactDOM.render(<Main />, document.getElementById("root"));
