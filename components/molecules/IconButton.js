import React from "react";

import Icon from "../atoms/Icon";

import PropTypes from "prop-types";

export default function IconButton(props) {
  return (
    <button
      className={props.additionalButtonStyles}
      onClick={props.onButtonClick}
    >
      <Icon icon={props.icon} additionalStyles={props.additionalIconStyles} />
    </button>
  );
}

IconButton.propTypes = {
  /**
   * icon which to display
   */
  icon: PropTypes.string.isRequired,

  /**
   * additional icon styles if needed
   */
  additionalIconStyles: PropTypes.string,

  /**
   * additional button styles if needed
   */
  additionalButtonStyles: PropTypes.string,

  /**
   * callback for when button is clicked
   */
  onButtonClick: PropTypes.func,
};
