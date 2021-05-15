import React from "react";
import PropTypes from "prop-types";

/**
 * input field for forms
 */
export default function Input(props) {
  return (
    <div className="w-full flex flex-col my-1">
      <label className={props.additionalLabelStyles} htmlFor={props.name}>
        {props.label}
      </label>
      {props.inputType === "textarea" ? (
        <textarea
          className={props.additionalInputStyles}
          name={props.name}
          placeholder={props.placeHolder}
          value={props.value}
          onChange={props.onChange}
          maxLength={props.maxLength}
          required={props.required}
        />
      ) : (
        <input
          className={props.additionalInputStyles}
          name={props.name}
          type={props.inputType}
          placeholder={props.placeHolder}
          value={props.value}
          pattern={props.pattern}
          onChange={props.onChange}
          required={props.required}
        />
      )}
    </div>
  );
}

Input.propTypes = {
  /**
   * input name
   */
  name: PropTypes.string.isRequired,
  /**
   * the type of the input i.e. text/email ect ect
   */
  inputType: PropTypes.string.isRequired,
  /**
   * label for the input
   */
  label: PropTypes.string.isRequired,
  /**
   * placeholder for the input
   */
  placeHolder: PropTypes.string,
  /**
   * value for the input
   */
  value: PropTypes.string.isRequired,

  /**
   * additional input styles
   */
  additionalInputStyles: PropTypes.string,

  /**
   * text area max length if inputType=textarea
   */
  maxLength: PropTypes.number,

  /**
   * additional label styles
   */
  additionalLabelStyles: PropTypes.string,

  /**
   * regexp patten to match
   */
  pattern: PropTypes.string,

  /**
   * onChange function for when the value of the form changes
   */
  onChange: PropTypes.func,

  /**
   * field is required
   */
  required: PropTypes.bool,
};
