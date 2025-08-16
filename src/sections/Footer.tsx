import React from "react";
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div> */}
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              href={socialImg.link}
              key={index}
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={socialImg.imgPath} alt="social icon" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Habib Rayhan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
