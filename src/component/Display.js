import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

// class Display extends React.Component {
//   render() {
//     return (
//       <div className="component-display">
//         <div>{this.props.value}</div>
//       </div>
//     );
//   }
// }
const display = props => {
  console.log("display", props.value);
  return (
    <div className="component-display">
      <div>{props.value}</div>
    </div>
  );
};
display.propTypes = {
  value: PropTypes.string,
};
export default display;
