import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const TaskItem = ({ title, desc, img }) => {
  return (
    <Container fluid="md">
      <Row>
        <Col className="py-5 px-2">
          <h2>{title}</h2>
          <p
            className="my-3"
            style={{ textAlign: "justify", fontSize: "0.8rem" }}
          >
            {desc}
          </p>
          <Container fluid className="text-center pt-3">
            <img
              className="img-fluid rounded float-left"
              src={process.env.PUBLIC_URL + `/assets/image/${img}`}
              alt={title}
            />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskItem;
