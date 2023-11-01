import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VarEx from './VarEx';

function App() {
  return (
    <div className="App">
     <Container>
      <Row className='justify-content-center'>
        <div className='rectangle'>
          <Col>Our their growth and success.</Col>
        </div>
        <VarEx />
      </Row>
    </Container>
    </div>
  );
}

export default App;