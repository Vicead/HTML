import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import data from '../data'
import { useNavigate } from "react-router-dom";
const CourseCard = () => {
  const navigate=useNavigate()
  return (
    <Container className="mt-4">
      <Row className="g-4 d-flex justify-content-center">
        {data.map(({ img, text, name, id }) => {
          return (
            <Col key={id} xs={12} md={6} lg={4}>
              <Card className="pt-4">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{text}</Card.Text>
                  <Button variant="warning" onClick={()=>navigate(`/courses/${name}`)}>Detaylar</Button>
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
