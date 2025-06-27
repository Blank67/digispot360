import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import "./LoginComponent.scss";
import loginPageImage from "@assets/loginForm-bg.jpg";
import { Link } from "react-router-dom";

export const LoginComponent = () => {
  return (
    <>
      <Container className="login-page-container">
        <Row className="form-container rounded overflow-hidden">
          <Col md={6} xs={12} className="left-section">
            <Image src={loginPageImage} alt="Login Page Image" fluid />
          </Col>
          <Col md={6} xs={12} className="right-section">
            <h5 className="text-primary">Welcome Back !</h5>
            <p className="text-muted">Sign in to continue to portal.</p>
            <Form className="login-form">
              <Form.Group className="mb-3">
                <Form.Label>Login Id</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <div className="float-end">
                  <Link to="/demo" className="text-muted">
                    Forgot password?
                  </Link>
                </div>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button type="submit" className="w-100" variant="success">
                Sign In
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
