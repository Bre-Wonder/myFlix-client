import Container from "react-bootstrap/Container";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { 
  MDBIcon,
  MDBNavbarItem,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem, } from 'mdb-react-ui-kit';

export const NavigationBar = ({ user, onLoggedOut, genres = [], directors = [], handleGenreSelect }) => {
  return(
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">My Flix App</Navbar.Brand>
        <Navbar.Toggle aria-controls="bassic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user && (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                    Genres
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      {genres.map((g, index) => (
                        <MDBDropdownItem key={index} link onClick={() => handleGenreSelect(g)}>{g}</MDBDropdownItem>
                      ))}
                      <MDBDropdownItem link onClick={() => handleGenreSelect(null)}>
                        All Genres
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                      Directors
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      {directors.map((d, index) => (
                        <MDBDropdownItem key={index} link>{d}</MDBDropdownItem>
                      ))}
                    </MDBDropdownMenu>
                  </MDBDropdown>
                  </MDBDropdown>
                </MDBNavbarItem>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};