import React, { useEffect, useState } from "react";

import Image from "next/image";

import PropTypes from "prop-types";

/**
 * hero component
 */
export default function Hero(props) {
  const [currentImageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (props.images.length > 1) {
      interval = setInterval(() => {
        console.log(currentImageIndex);
        if (currentImageIndex < props.images.length - 1) {
          setImageIndex(currentImageIndex + 1);
        } else {
          setImageIndex(0);
        }
      }, props.transitionTime);
      return () => clearInterval(interval);
    }
  }, [setImageIndex, currentImageIndex]);

  return (
    <>
      <div className="hidden w-full md:flex md:flex-wrap">
        <div
          className="relative mx-2 w-1/3"
          style={{
            minWidth: "400px",
            height: "500px",
          }}
        >
          <Image
            className="rounded-lg"
            src={props.images[currentImageIndex].path}
            alt={props.images[currentImageIndex].altText}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={props.additionalContentContainerDesktopStyles}>
          {props.children}
        </div>
      </div>
      <div className="w-full flex flex-col md:hidden">
        <div
          className="relative w-full"
          style={{
            height: "300px",
          }}
        >
          <Image
            src={props.images[currentImageIndex].path}
            alt={props.images[currentImageIndex].altText}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={props.additionalContentContainerMobileStyles}>
          {props.children}
        </div>
      </div>
    </>
  );
}

Hero.propTypes = {
  /**
   * array of image paths to transition
   */
  images: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      altText: PropTypes.string.isRequired,
    })
  ),

  /**
   * time in milliseconds to transition between images.
   * If images array is of length 1 this will have no effect
   */
  transitionTime: PropTypes.number,

  /**
   * content container styles for desktop
   */
  additionalContentContainerDesktopStyles: PropTypes.string,

  /**
   * content container styles for mobile
   */

  additionalContentContainerMobileStyles: PropTypes.string,
  /**
   * child elements to include in hero
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
