import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer class="footer">
      <div class="social-media-list">
        <a
          className="faGithub app-link social-media-list"
          href="https://github.com/Solrak97/tf-vgg16-flowerdata"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <div class="participants"></div>
    </footer>
  );
}

export default Footer;
