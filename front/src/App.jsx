import { Row, Col } from "react-bootstrap";
import "./App.css";
import BasicMenu from "./components/BasicMenu";
import ListGroup from "react-bootstrap/ListGroup";
import { useEffect, useState } from "react";

function App() {
  const initalData = [
    {
      id: 1,
      type: "fast",
      name: "food 1",
      desc: "massive collection of recipes that are submitted, rated and reviewed by people who are passionate about food",
      price: 10,
      img: "img-1.jpg",
    },
    {
      id: 2,
      type: "dinner",
      name: "food 2",
      desc: "massive collection of recipes that are submitted, rated and reviewed by people who are passionate about food",
      price: 40,
      img: "img-2.jpg",
    },
    {
      id: 3,
      type: "dinner",
      name: "food 3",
      desc: "massive collection of recipes that are submitted, rated and reviewed by people who are passionate about food",
      price: 20,
      img: "img-3.jpg",
    },
    {
      id: 4,
      type: "lunch",
      name: "food 4",
      desc: "massive collection of recipes that are submitted, rated and reviewed by people who are passionate about food",
      price: 11,
      img: "img-1.jpg",
    },
  ];

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(initalData);
  }, []);

  const handleChangeType = (type = "") =>
    setData(
      initalData.filter((x) => type == null || type === "" || x.type === type)
    );
  return (
    <>
      <div>
        <BasicMenu />
        <section>
          <h1 className="header">Foods Menu</h1>
        </section>
        <Row className="justify-content-center">
          <Col xs="4">
            <ListGroup horizontal>
              <ListGroup.Item onClick={() => handleChangeType("fast")}>
                {" "}
                Fast{" "}
              </ListGroup.Item>
              <ListGroup.Item onClick={() => handleChangeType("dinner")}>
                Dinner
              </ListGroup.Item>
              <ListGroup.Item onClick={() => handleChangeType("lunch")}>
                Lunch
              </ListGroup.Item>
              <ListGroup.Item onClick={() => handleChangeType()}>
                All!
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <br></br>
        {data.map((item, index) => {
          return (
            <Row key={index} className="sec_menu">
              <Col lg="2" className="mx-2 col-img">
                <img src={"./images/" + item.img} className="img" alt="Image" />
              </Col>
              <Col lg="6">
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
              </Col>
              <Col className="col-price" lg="3">
                <h6>{item.price}</h6>
              </Col>
            </Row>
          );
        })}

        <hr></hr>
      </div>
    </>
  );
}

export default App;
