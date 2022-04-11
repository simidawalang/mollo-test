import React from "react";
import Pill from "./Pill";
import appleIcon from "../../assets/icons/apple.svg";
import playstoreIcon from "../../assets/icons/apple.svg";

const DownloadLinks = () => {
    return (
        <div className="pill-download-links">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noreferrer"
              >
                <Pill variant="green" size="md">
                  <img src={playstoreIcon} alt="playstore icon" />
                  <p>
                    Get it on <strong>Play Store</strong>
                  </p>
                </Pill>
              </a>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noreferrer"
              >
                <Pill variant="green" size="md">
                  <img src={appleIcon} alt="apple icon" />
                  <p>
                    Get it on <strong>Apple</strong>
                  </p>
                </Pill>
              </a>
            </div>
    );
};

export default DownloadLinks;