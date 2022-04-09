import React from "react";
import virtualCardsImage from "../../../assets/images/virtual-cards-img.png";
import listStyleMarker from "../../../assets/images/list-style-img.png";

const VirtualCards = () => {
  return (
    <section id="virtual-cards">
      <img src={virtualCardsImage} alt="Pay Bills with your phone" />
      <div className="section-info">
        <p>Bill payment</p>
        <h1>Take advantage of seamless payments at a low or no cost.</h1>
        <p>
          With only a few clicks on your smartphone, you can pay all of your
          bills and top up your airtime at the lowest possible price.
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
    </section>
  );
};

export default VirtualCards;
