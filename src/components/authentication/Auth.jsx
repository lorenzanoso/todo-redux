import React from "react";
import "./Auth.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import Login from "./Login";
import Signup from "./Signup";

export default function Auth() {
  return (
    <div className="Auth">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="rowContainer">
          <Col sm={4} className="selectorSection">
            <Nav variant="pills" className="flex-column btnContainer">
              <Nav.Item>
                <Nav.Link eventKey="first">Register</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Login</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Signup />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Login />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
