import React from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

const Contacts = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container className="d-flex justify-content-center align-items-center">
          <Row>
            <Col lg="12" md="12">
              <h3 className="mb-5 text-center">Contact Info</h3>
              <form className="contact__form">
                <div className="form__group">
                  <input type="text" placeholder="Enter your name" required />
                </div>

                <div className="form__group">
                  <input type="email" placeholder="Enter your email" />
                </div>
                <div className="form__group">
                  <input type="number" placeholder="Phone number" />
                </div>
                <div className="form__group">
                  <input type="text" placeholder="Message" />
                </div>

                <button type="submit" className="btn btn-danger">
                  Send
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contacts;
