import React from "react";

import Link from "next/link";

import PropTypes from "prop-types";

/**
 * navigation menu item
 */
export default function NavItem(props) {
  const component = () => (
    <div className={props.containerStyles}>
      {props.isExternalLink ? (
        <a href={props.href} className={props.linkStyles}>
          {props.text}
        </a>
      ) : props.isAllClickable ? (
        <a className={props.linkStyles}>{props.text}</a>
      ) : (
        <Link href={props.href}>
          <a className={props.linkStyles}>{props.text}</a>
        </Link>
      )}
    </div>
  );

  if (props.isAllClickable) {
    return <Link href={props.href}>{component()}</Link>;
  }

  return component();
}

NavItem.propTypes = {
  /**
   * text to display for the nav item
   */
  text: PropTypes.string.isRequired,

  /**
   * link which will be redirected too
   */
  href: PropTypes.string.isRequired,

  /**
   * boolean flag to indicate whether or not the link is an external one
   */
  isExternalLink: PropTypes.bool,

  /**
   * additional styles for the link
   */
  linkStyles: PropTypes.string,

  /**
   * container styles
   */
  containerStyles: PropTypes.string,

  /**
   * boolean flag to specify that the whole of the link should be clickable
   */
  isAllClickable: PropTypes.bool,
};
