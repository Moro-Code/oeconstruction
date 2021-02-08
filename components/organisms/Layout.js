import React from "react";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="relative w-screen h-screen">
      <NavMenu
        logoText="O&E Painting and Drywall"
        links={[
          {
            href: "/",
            text: "Home",
          },
          {
            href: "/pages/about-us",
            text: "About Us",
          },
          {
            href: "/services",
            text: "Services We Offer",
          },
          {
            href: "/pages/contact-us",
            text: "Contact Us",
          },
        ]}
      />
      {children}
      <Footer
        copyRightText="O&E Painting and Drywall Inc."
        links={[
          {
            href: "/pages/about-us",
            text: "About Us",
          },
          {
            href: "/services",
            text: "Services We Offer",
          },
          {
            href: "/pages/contact-us",
            text: "Contact Us",
          },
        ]}
      />
    </div>
  );
}
