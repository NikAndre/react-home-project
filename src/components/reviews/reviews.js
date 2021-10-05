import React from "react";
import Review from "../review/review";
import { connect } from "react-redux";
import { addReview } from "../redux/actions";
import Cart from "../cart/cart";

function Reviews({ arrId, addReview }) {
  const handleFormClick = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const text = e.target.text.value;
    const rating = e.target.rating.value;

    addReview(name, text, rating);
  };

  return (
    <div className={"block-wrapper"}>
      <div className={"menu-block"}>
        <h1>Reviews</h1>
        <div className={"wrapper"}>
          {arrId.map((id) => (
            <Review key={id} id={id} />
          ))}
        </div>
        <div>
          <h2>Leave your review</h2>
          <form onSubmit={handleFormClick}>
            <input type={"text"} name={"name"} />
            <input type={"text"} name={"text"} />
            <label>Rating</label>
            <input name={"rating"} type={"number"} />
            <button type={"submit"}> Отправить </button>
          </form>
        </div>
      </div>
      <Cart />
    </div>
  );
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  addReview,
};
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
