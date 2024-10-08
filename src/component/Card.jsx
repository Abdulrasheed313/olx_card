
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


function Cards({title, text, src, price}) {
  return (
    <Container>
    <Row>
      <Col>
      <Card style={{ width: '18rem' }}>
      
      <img variant="top" src={src} alt=""  width="100%"/>
      
       <Card.Body>
    <h4>{price}</h4>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">Add TO Cart</Button>
       </Card.Body>
    </Card>
    </Col>
    </Row>
    
   
  </Container>
   
  );
}

export default Cards;



