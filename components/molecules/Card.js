import React from "react";
import PropTypes from "prop-types";

/**
 * card component to display items
 */
export default function Card(props) {
  let text = props.text;
  if (text.length > 150) {
    text = props.text.slice(0, 150);
    text += " ...";
  }
  return (
    <div className="flex flex-col md:flex-row max-w-screen-sm md:max-w-screen-lg shadow-lg h-96 md:h-44 rounded-lg slide-top-hover cursor-pointer my-3 mx-2">
      <img
        className="h-1/2 md:h-40 md:w-60 rounded-t-lg md:rounded-lg m-0 md:m-2"
        src={props.image}
        alt={props.imageAltText}
      />
      <div className="flex flex-col p-2 w-full">
        <h2 className="md:w-full text-left text-3xl font-sans">
          {props.title}
        </h2>
        <p className="break-words text-left text-lg mt-2 font-sans">{text}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  /**
   * image for the card
   */
  image: PropTypes.string.isRequired,

  /**
   * image alt text
   */
  imageAltText: PropTypes.string.isRequired,

  /**
   * title for the card
   */
  title: PropTypes.string.isRequired,

  /**
   * text for the card
   */
  text: PropTypes.string.isRequired,
};
