import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import './ProfilePage.css';

function ProfilePage() {
  const { id } = useParams();
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://randomuser.me/api?results=5`)
      .then(response => response.json())
      .then(data => setUser(data.results[id]))
      .catch(err => console.log(err));
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <Container className="my-4" fluid="sm"> 
      <Card className="profile-card text-center">
        <Card.Img
          variant="top"
          src={user.picture.large}
          alt="User Image"
          className="profile-image"
        />
        <Card.Body>
          <Card.Title>{`${user.name.title} ${user.name.first} ${user.name.last}`}</Card.Title>
          <Card.Text className="profile-text">
            <strong>Gender:</strong> {user.gender}<br />
            <strong>Location:</strong> {`${user.location.city}, ${user.location.state}, ${user.location.country}`}<br />
            <strong>Email:</strong> {user.email}<br />
            <strong>Phone:</strong> {user.phone}<br />
            <strong>Cell:</strong> {user.cell}<br />
            <strong>Date of Birth:</strong> {new Date(user.dob.date).toLocaleDateString()}<br />
            <strong>Nationality:</strong> {user.nat}
          </Card.Text>
          <Link to="/">
            <Button variant="secondary">Back to Home</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProfilePage;
