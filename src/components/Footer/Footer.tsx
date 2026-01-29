import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Sparkles,
} from "lucide-react";
import "./footer.css";
import logo from "../../../public/logo/logo.png"
import Image from "next/image";


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">

        <div className="row footer-top">

          {/* Brand */}
          <div className="col-lg-4">
            <div className="footer-brand">
              <div className="logo">
            <Image src={logo}  alt="logo" />
          </div>

              <p>
                Innovative health assistant app that leverages artificial
                intelligence to provide personalized wellness
                recommendations.
              </p>

              <a href="mailto:hello@reppoo.com">
                hello@reppoo.com
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="col-lg-2">
            <h6>Company</h6>
            <ul>
              <li>Home</li>
              <li>Early Access</li>
              <li>404</li>
            </ul>
          </div>

          {/* App */}
          <div className="col-lg-3">
            <h6>App</h6>
            <ul>
              <li>Download for iOS</li>
              <li>Download for Android</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-lg-3">
            <h6>Legal Pages</h6>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

        </div>

        <hr />

        <div className="footer-bottom">
          <p>© Copyright Reppoo</p>

          <div className="social-icons">
            <Facebook size={16} />
            <Twitter size={16} />
            <Instagram size={16} />
            <Linkedin size={16} />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
