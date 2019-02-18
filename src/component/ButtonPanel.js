import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";
import Button from "./Button";

// class ButtonPanel extends React.Component {
//   // handleClick = buttonName => {
//   //   this.props.clickHandler(buttonName);
//   // };

//   render() {
//     return (
//       <div className="component-button-panel">
//         <div>
//           <Button
//             name="AC"
//             clickHandler={name => this.props.clickHandler(name)}
//           />
//           <Button
//             name="+/-"
//             clickHandler={name => this.props.clickHandler(name)}
//           />
//           <Button
//             name="%"
//             clickHandler={name => this.props.clickHandler(name)}
//           />
//           <Button
//             name="÷"
//             clickHandler={name => this.props.clickHandler(name)}
//             orange
//           />
//         </div>
//         <div>
//           <Button
//             name="7"
//             clickHandler={name => this.props.clickHandler(name)}
//           />
//           <Button
//             name="8"
//             clickHandler={name => this.props.clickHandler(name)}
//           />
//           <Button
//             name="9"
//             clickHandler={name => this.props.clickHandler(name)}
//           />
//           <Button
//             name="x"
//             clickHandler={name => this.props.clickHandler(name)}
//             orange
//           />
//         </div>
//         <div>
//           <Button
//             name="4"
//             clickHandler={name => this.props.clickHandler(name)}
//           />
//           <Button
//             name="5"
//             clickHandler={name => this.props.clickHandler(name)}
//           />
//           <Button
//             name="6"
//             clickHandler={name => this.props.clickHandler(name)}
//           />
//           <Button
//             name="-"
//             clickHandler={name => this.props.clickHandler(name)}
//             orange
//           />
//         </div>
//         <div>
//           <Button
//             name="1"
//             clickHandler={name => this.props.clickHandler(name)}
//           />
//           <Button
//             name="2"
//             clickHandler={name => this.props.clickHandler(name)}
//           />
//           <Button
//             name="3"
//             clickHandler={name => this.props.clickHandler(name)}
//           />
//           <Button
//             name="+"
//             clickHandler={name => this.props.clickHandler(name)}
//             orange
//           />
//         </div>
//         <div>
//           <Button
//             name="0"
//             clickHandler={name => this.props.clickHandler(name)}
//             wide
//           />
//           <Button
//             name="."
//             clickHandler={name => this.props.clickHandler(name)}
//           />
//           <Button
//             name="="
//             clickHandler={name => this.props.clickHandler(name)}
//             orange
//           />
//         </div>
//       </div>
//     );
//   }
// }
const buttonPanel = props => {
  return (
    <div className="component-button-panel">
      <div>
        <Button name="AC" clickHandler={name => props.clickHandler(name)} />
        <Button name="+/-" clickHandler={name => props.clickHandler(name)} />
        <Button name="%" clickHandler={name => props.clickHandler(name)} />
        <Button
          name="÷"
          clickHandler={name => props.clickHandler(name)}
          orange
        />
      </div>
      <div>
        <Button name="7" clickHandler={name => props.clickHandler(name)} />
        <Button name="8" clickHandler={name => props.clickHandler(name)} />
        <Button name="9" clickHandler={name => props.clickHandler(name)} />
        <Button
          name="x"
          clickHandler={name => props.clickHandler(name)}
          orange
        />
      </div>
      <div>
        <Button name="4" clickHandler={name => props.clickHandler(name)} />
        <Button name="5" clickHandler={name => props.clickHandler(name)} />
        <Button name="6" clickHandler={name => props.clickHandler(name)} />
        <Button
          name="-"
          clickHandler={name => props.clickHandler(name)}
          orange
        />
      </div>
      <div>
        <Button name="1" clickHandler={name => props.clickHandler(name)} />
        <Button name="2" clickHandler={name => props.clickHandler(name)} />
        <Button name="3" clickHandler={name => props.clickHandler(name)} />
        <Button
          name="+"
          clickHandler={name => props.clickHandler(name)}
          orange
        />
      </div>
      <div>
        <Button name="0" clickHandler={name => props.clickHandler(name)} wide />
        <Button name="." clickHandler={name => props.clickHandler(name)} />
        <Button
          name="="
          clickHandler={name => props.clickHandler(name)}
          orange
        />
      </div>
    </div>
  );
};
buttonPanel.propTypes = {
  clickHandler: PropTypes.func,
};
export default buttonPanel;
