import React from "react";
import Pill from "../../../components/ui/Pill";
import transferFundsImg from "../../../assets/images/transfer-funds-img.svg";
import listStyleMarker from "../../../assets/images/list-style-marker.svg";

const TransferFunds = () => {
  return (
    <section id="transfer-funds">
      <div className="section-info">
        <Pill className="section-title" variant="purple" size="sm">
          Transfer funds
        </Pill>
        <h1>Send money to friends and family in a flash.</h1>
        <p>
          Transfers to the Mollo account are free, and you can send money to any
          bank account in Nigeria.
        </p>
        <ul>
          <li>
            <img
              src={listStyleMarker}
              alt="list style marker"
              width={20}
              height={20}
            />
            Purchase airtime and data for all networks you can get 10% discount.
          </li>
          <li>
            <img
              src={listStyleMarker}
              alt="list style marker"
              width={20}
              height={20}
            />
            Pay for your cable television, power and water bills and save up to
            100% on fees
          </li>
          <li>
            <img
              src={listStyleMarker}
              alt="list style marker"
              width={20}
              height={20}
            />
            You can get up to 10% discount when you pay your bills
          </li>
        </ul>
      </div>
      <img src={transferFundsImg} alt="Pay Bills with your phone" />
    </section>
  );
};

export default TransferFunds;
