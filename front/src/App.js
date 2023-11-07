import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
  return (
    <div className="App">
     <Container className='py-5'>
     <Row className='justify-content-center'>
          <Col sm="8" className='dates-count'> one Row </Col>
      </Row>
      <Row className='justify-content-center'>
        <div className='rectangle'>
          <Col>Row2.</Col>
        </div>
      </Row>
      <Row className='justify-content-center'>
        <div className='btn-style'>
          <Col lg="3">Row3.</Col>
          <Col lg="3">Row3.2</Col>
        </div>
      </Row>
    </Container>
    </div>
  );
}

export default App;