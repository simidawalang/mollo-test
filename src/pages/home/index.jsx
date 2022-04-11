import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Button from "../../components/ui/Button";
import BillPayments from "./sections/BillPayments";
import Register from "./sections/Register";
import TransferFunds from "./sections/TransferFunds";
import VirtualCards from "./sections/VirtualCards";
import headerImage from "../../assets/images/header-img.png";
import DownloadLinks from "../../components/ui/DownloadLinks";
import Pill from "../../components/ui/Pill";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-page">
        <header>
          <div>
            <Pill className="section-title" variant="purple" size="sm">
              Digital bank
            </Pill>
            <h1>All lifestyles can gain from digital banking.</h1>
            <p>
              With a free Mollo, you can unlock the power of money. All of your
              bills, money transfers, buy airtime can be done in one spot.
            </p>
            <Link to="/auth">
              <Button variant="purple" content="Get Started" />
            </Link>
            <DownloadLinks />
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
