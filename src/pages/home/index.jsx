import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Button from "../../components/ui/Button";
import Pill from "../../components/ui/Pill";
import BillPayments from "./sections/BillPayments";
import Register from "./sections/Register";
import TransferFunds from "./sections/TransferFunds";
import VirtualCards from "./sections/VirtualCards";
import headerImage from "../../assets/images/header-img.png";
import playstoreIcon from "../../assets/icons/playstore.svg";
import appleIcon from "../../assets/icons/apple.svg";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-page">
        <header>
          <div>
            <p>Digital bank</p>
            <h1>All lifestyles can gain from digital banking.</h1>
            <p>
              With a free Mollo, you can unlock the power of money. All of your
              bills, money transfers, buy airtime can be done in one spot.
            </p>
            <Link to="/auth">
              <Button variant="purple" content="Get Started" />
            </Link>
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
          </div>
          <img src={headerImage} alt="Smiling man with his thumb up" />
        </header>
        <BillPayments />
        <TransferFunds />
        <VirtualCards />
        <Register />
        <Footer />
      </div>
    </>
  );
};

export default Home;
