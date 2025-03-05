import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="logo footer-logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tea Squire and Biryani Bistro</h5>
              <p>Best Food In Town.</p>
              <ListGroupItem className="delivery-time-item border-0 ps-0">
                <span>Every Day</span>
                <p>10:00 am to 12:00 am</p>
              </ListGroupItem>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer-title">Delivery Time</h5>
            <ListGroup className="delivery-time-list">
              <ListGroupItem className="delivery-time-item border-0 ps-0">
                <span>Every Day</span>
                <p>10:00 am to 12:00 am</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer-title">Partners</h5>
            <ListGroup className="delivery-time-list">
              <ListGroupItem className="delivery-time-item border-0 ps-0">
                <span>DoorDash</span>
              </ListGroupItem>
              <ListGroupItem className="delivery-time-item border-0 ps-0">
                <span>uber eats</span>
              </ListGroupItem>
              <ListGroupItem className="delivery-time-item border-0 ps-0">
                <span>Phone orders for takeout</span>
              </ListGroupItem>
              <ListGroupItem className="delivery-time-item border-0 ps-0">
                <span>T-squire⁠online app</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer-title">Contact</h5>
            <ListGroup className="delivery-time-list">
              <ListGroupItem className="delivery-time-item border-0 ps-0">
                <span>Location: Los Angeles, CA</span>
              </ListGroupItem>
              <ListGroupItem className="delivery-time-item border-0 ps-0">
                <span>Phone: +038733</span>
              </ListGroupItem>

              <ListGroupItem className="delivery-time-item border-0 ps-0">
                <span>Email: tsbb@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer-title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter d-flex justify-content-center align-items-center">
              <input type="email" placeholder="Enter Your Email" />
              <span>
                <i className="ri-send-plane-fill"></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright-text">
              &copy; Copyright - 2025, All rights reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social-link d-flex justify-content-end align-items-center gap-4">
              <p className="m-0">Follow Us: </p>
              <span className="d-flex gap-2 ">
                {" "}
                <Link to={"www.facebook.com"}>
                  <i className="ri-facebook-circle-line"></i>
                </Link>
                <Link to={"www.instagram.com"}>
                  <i className="ri-instagram-line"></i>
                </Link>
                <Link to={"www.youtube.com"}>
                  <i className="ri-youtube-line"></i>
                </Link>
                <Link to={"www.twitter.com"}>
                  <i className="ri-twitter-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
