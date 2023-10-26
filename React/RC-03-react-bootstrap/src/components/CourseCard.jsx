import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
// ! react alanında döngü olarak sadece map desteklenir,condition lardan da sadece ternary desteklenir
const CourseCard = ({ data }) => {
  return (
    <Container className="mt-4">
      <Row className="g-4 d-flex justify-content-center">
        {data.map(({ img, text, name, id }) => {
          return (
            /* <Col className="col-12 col-md-6 col-lg-4"> */
            <Col key={id} xs={12} md={6} lg={4}>
              <Card className="pt-4">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                  <Button variant="warning">Detaylar</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CourseCard;
