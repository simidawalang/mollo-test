import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import Pill from "../../components/ui/Pill";
import BillPayments from "./sections/BillPayments";
import Register from "./sections/Register";
import TransferFunds from "./sections/TransferFunds";
import VirtualCards from "./sections/VirtualCards";

const Home = () => {
  return (
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
          <div>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
            >
              <Pill>PlayStore</Pill>
            </a>
          </div>
        </div>
      </header>
      <BillPayments />
      <TransferFunds />
      <VirtualCards />
      <Register />
    </div>
  );
};

export default Home;
