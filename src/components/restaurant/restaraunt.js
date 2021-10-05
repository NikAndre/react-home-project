import React from "react";
import Menu from "../menu/menu";
import Rate from "../rate/rate";
import Reviews from "../reviews/reviews";
import { connect } from "react-redux";
import Tabs from "../navigation/navigation";
import "../../Styles.css";

function Restaurant({ restaurant }) {
  const tabs = [
    { title: "Menu", content: <Menu menu={restaurant.menu} /> },
    { title: "Reviews", content: <Reviews arrId={restaurant.reviews} /> },
  ];

  return (
    <div>
      <div className={"restaurant-name-wrapper"}>
        <h1>{restaurant.name}</h1>
        <Rate reviewsId={restaurant.reviews} />
      </div>
      <Tabs tabs={tabs} />
    </div>
  );
}

export default connect()(Restaurant);
