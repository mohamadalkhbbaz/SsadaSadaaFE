import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Data } from "./Data/Data";

function App() {

  const [data,setData] = useState([]);

  useEffect(() => {
    setData(Data)
  },[])

  const handleDeleteData = () => {
    setData([]);
  }
  const handleShowData = () => {
    setData(Data);
  }
  
  const lengthData = data.length;
  const dataIsEmpty = data.length == 0;

  return (
    <div className="App">
      <Container>
        <Row className="justify-content-center my-1">
          <Col sm="8">لديك اليوم{lengthData} مواعيد </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm="8">
            <div className="rectangle p-2">
              {  dataIsEmpty ? <h4 className="text-center">لا يوجد مواعيد اليوم</h4>: 
              data.map((item) => {
                return (
                  <div className="d-flex p-1">
                    <img className="pic m-2" src={"./"+item.img} />
                    <div>
                      <h5 className="d-inline">{item.name}</h5>
                      <p className="fs-6">{item.reminderData}</p>
                    </div>
                  </div>
                );
              })
              }
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="d-flex justify-content-between my-2 " sm="8">
            <button className="btn-style" onClick={handleDeleteData}> مسح البيانات </button>
            <button className="btn-style" onClick={handleShowData} > عرض البيانات </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
