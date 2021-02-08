import React from "react";
import PropTypes from "prop-types";

/**
 * Component to render icons from icomoon font icons
 */
export default function Icon(props) {
  return (
    <span
      className={`${props.icon}${
        props.additionalStyles
          ? " " + props.additionalStyles
          : " " + "text-black"
      }`}
    />
  );
}

Icon.propTypes = {
  /**
   * the icon name, this is the classname found in the style.css in the icomoon file
   */
  icon: PropTypes.string.isRequired,

  /**
   * any additional css classes you wish to supply
   */
  additionalStyles: PropTypes.string,
};
