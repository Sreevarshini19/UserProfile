import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePage.css';
function HomePage() {
  const [users, setUsers] = useState([]);
  //Fetch data from the API
  useEffect(() => {
    fetch('https://randomuser.me/api?results=5')
      .then(response => response.json())
      .then(data => setUsers(data.results))
      .catch(err => console.log(err));
  }, []);
  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">User Profiles</h1> 
      <Row className="gy-4">
        {users.map((user, index) => (
          <Col key={index} md={6} lg={4}>
            <Card className="user-card h-100">
              <Card.Img variant="top" src={user.picture.large} alt="User Image" />
              <Card.Body>
                <Card.Title>{`${user.name.title} ${user.name.first} ${user.name.last}`}</Card.Title>
                <Card.Text>
                  <strong>Location:</strong> {`${user.location.city}, ${user.location.country}`}<br />
                  <strong>Email:</strong> {user.email}
                </Card.Text>
                <Link to={`/profile/${index}`}>
                  <Button variant="primary">Read More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;
