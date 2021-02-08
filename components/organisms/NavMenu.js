import React, { useState } from "react";

import NavItem from "../atoms/NavItem";
import IconButton from "../molecules/IconButton";
import MobileNavMenu from "../molecules/MobileNavMenu";

import PropTypes from "prop-types";

/**
 * navigation menu for the application
 */
export default function NavMenu(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="w-full flex justify-between items-center h-16 relative px-2">
      <h1 className="font-title text-lg md:text-2xl lg:text-3xl">
        {props.logoText}
      </h1>
      <div className="hidden md:flex">
        {props.links.map((link) => {
          return (
            <NavItem
              key={link.text}
              text={link.text}
              href={link.href}
              isExternalLink={link.isExternal}
              containerStyles="flex items-center h-10 rounded-lg mx-2 p-1"
              linkStyles="cursor-pointer text-gray-600 hover:text-black"
            />
          );
        })}
      </div>
      <IconButton
        icon="icon-menu"
        additionalButtonStyles="md:hidden text-black hover:text-gray-600"
        additionalIconStyles="text-current"
        onButtonClick={() => {
          console.log("called");
          setMobileMenuOpen(true);
        }}
      />
      {mobileMenuOpen ? (
        <MobileNavMenu
          logoText={props.logoText}
          links={props.links}
          onClose={() => {
            setMobileMenuOpen(false);
          }}
        />
      ) : undefined}
    </div>
  );
}

NavMenu.propTypes = {
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
};
