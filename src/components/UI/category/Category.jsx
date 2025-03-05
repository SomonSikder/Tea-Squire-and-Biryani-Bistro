import React from "react";
import { Col, Container, Row } from "reactstrap";
import tea from "../../../assets/images/hot-tea-icon.png";
import dessert from "../../../assets/images/macarons-color-icon.png";
import rice from "../../../assets/images/rice-bowl-icon.png";
import "../../../styles/category.css";

const categoryData = [
  {
    display: "Biryani",
    imgUrl: rice,
  },
  {
    display: "Tea",
    imgUrl: tea,
  },

  {
    display: "Desserts",
    imgUrl: dessert,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-3" key={index + 1}>
            <div className="category-item bg-pink-100 p-4 rounded-lg text-center">
              <div className="category-img w-full h-40 flex items-center justify-center overflow-hidden">
                <img
                  src={item.imgUrl}
                  alt="Category_item"
                  className="w-auto h-full object-cover rounded-md"
                />
              </div>
              <h6 className="mt-2 text-black">{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
