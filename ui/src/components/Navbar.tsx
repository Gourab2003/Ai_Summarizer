import { useState } from "react";
import { Navbar, Container, Nav, Button, Offcanvas } from "react-bootstrap";
import { ThreeDots } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" className="py-3 navbar-custom" fixed="top">
        <Container fluid>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-light">
            AI Summarizer
          </Navbar.Brand>

          {/* Mobile Menu Button */}
          <Button
            variant="outline-light"
            className="d-lg-none"
            onClick={() => setShowMenu(true)}
          >
            <ThreeDots size={24} />
          </Button>

          {/* Desktop Navigation */}
          <Navbar.Collapse className="justify-content-end d-none d-lg-flex">
            <Nav>
              <Nav.Link as={Link} to="/" className="nav-link-custom">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/summarize" className="nav-link-custom">
                Summarize
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link-custom">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link-custom">
                Contact
              </Nav.Link>
              <Link to="/summarize" className="text-decoration-none">
                <Button className="get-started-btn">
                  Get Started
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas Mobile Menu */}
      <Offcanvas show={showMenu} onHide={() => setShowMenu(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" className="fs-5 mb-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/summarize" className="fs-5 mb-3">
              Summarize
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="fs-5 mb-3">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="fs-5 mb-3">
              Contact
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Custom Styles */}
      <style>
        {`
          body {
            background: #1a1a1a;
            color: #f8f9fa;
          }

          .navbar-custom {
            background: linear-gradient(to right, #232526, #414345);
            box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease-in-out;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }

          .nav-link-custom {
            color: #dcdcdc !important;
            font-size: 1.1rem;
            margin: 0 15px;
            transition: color 0.3s ease-in-out, transform 0.2s ease;
          }

          .nav-link-custom:hover {
            color: #bfbfbf !important;
            transform: scale(1.05);
          }

          .get-started-btn {
            border-radius: 8px;
            padding: 10px 20px;
            font-weight: 600;
            background: rgba(0, 123, 255, 0.2);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(0, 123, 255, 0.4);
            transition: all 0.3s ease;
            color: white;
          }

          .get-started-btn:hover {
            background: rgba(0, 123, 255, 0.4);
            border-color: rgba(0, 123, 255, 0.6);
            transform: scale(1.05);
          }
        `}
      </style>
    </>
  );
}

export default Header;