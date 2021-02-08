import React from "react";

import NavItem from "../atoms/NavItem";
import IconButton from "./IconButton";

import PropTypes from "prop-types";

/**
 * mobile navigation menu
 */
export default function MobileNavMenu(props) {
  return (
    <div className="flex flex-col w-11/12 rounded-lg shadow-lg bg-white z-50 p-3 absolute top-0.5 right-0 left-0 mx-auto">
      <div className="flex h-5 w-full justify-between items-center mb-2">
        <h1 className="font-title text-sm md:text-xl">{props.logoText}</h1>
        <IconButton
          icon={"icon-cross"}
          onButtonClick={props.onClose}
          additionalIconStyles={"text-gray-600 hover:text-black"}
        />
      </div>
      {props.links.map((link) => {
        return (
          <NavItem
            key={link.text}
            text={link.text}
            href={link.href}
            isExternalLink={link.isExternal}
            isAllClickable
            containerStyles="flex items-center h-6 rounded-lg hover:bg-gray-300 text-gray-600 hover:text-black m-0 p-1 cursor-pointer"
            linkStyles="text-current cursor-pointer"
          />
        );
      })}
    </div>
  );
}

MobileNavMenu.propTypes = {
  /**
   * string for the logo
   */
  logoText: PropTypes.string.isRequired,

  /**
   * links to render in the mobile menu
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      isExternal: PropTypes.bool,
    })
  ),

  /**
   * callback when close button is clicked
   */
  onClose: PropTypes.func,
};
