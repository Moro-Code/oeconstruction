import React from "react";
import PropTypes from "prop-types";
import NavItem from "../atoms/NavItem";

/**
 * Footer component for layout
 */
export default function Footer(props) {
  return (
    <div className="relative bottom-0 left-0 w-full h-20 bg-black flex flex-col mt-2 z-0">
      <nav className="flex w-full justify-center flex-wrap m-2">
        {props.links.map((link) => {
          return (
            <NavItem
              key={link.text}
              text={link.text}
              href={link.href}
              isExternalLink={link.isExternal}
              containerStyles="flex items-center h-6 rounded-lg mx-2 p-1"
              linkStyles="cursor-pointer text-white hover:underline"
            />
          );
        })}
      </nav>
      <p className="w-full text-center text-white font-title">
        &copy; {props.copyRightText}
      </p>
    </div>
  );
}

Footer.propTypes = {
  /**
   * copy right text
   */
  copyRightText: PropTypes.string,

  /**
   * links to show in the footer
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      isExternal: PropTypes.bool,
    })
  ),
};
