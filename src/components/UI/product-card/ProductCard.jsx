import React from "react";
import "../../../styles/product-card.css";

import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>

      <div className="product__content ">
        <h5>
          <Link to={`/food/${id}`}>{title}</Link>
        </h5>
        <Row className="cart-bottom d-flex justify-content-between align-items-center">
          <Col lg="4" md="4" sm="4" xs="12">
            <span className="product__price">${price}</span>
          </Col>
          <Col lg="6" md="6" sm="6" xs="12">
            <button className="addTOCart__btn" onClick={addToCart}>
              Add to Cart
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductCard;
