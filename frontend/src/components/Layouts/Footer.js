import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-500 text-white relative bottom-0 w-full">
        <div className="container mx-auto flex flex-wrap md:flex-no-wrap h-14 justify-between items-center">
          <div className="mb-2 md:mb-0">
            <p>&copy; 2023 Your Website Name. All Rights Reserved.</p>
          </div>
          <div>
            <ul className="flex flex-wrap space-x-6">
              <li>
                <a href="/aboutus" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-gray-400">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
