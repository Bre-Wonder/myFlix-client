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

export const NavigationBar = ({ user, onLoggedOut }) => {
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
                      <MDBDropdownItem link>Action</MDBDropdownItem>
                      <MDBDropdownItem link>Romantic Comedy </MDBDropdownItem>
                      <MDBDropdownItem link>Coming of Age</MDBDropdownItem>
                      <MDBDropdownItem link>Animation</MDBDropdownItem>
                      <MDBDropdownItem link>Adventure</MDBDropdownItem>
                      <MDBDropdownItem link>Superhero</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                      Directors
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem link>Mark Dindal</MDBDropdownItem>
                      <MDBDropdownItem link>Steven Sordergh</MDBDropdownItem>
                      <MDBDropdownItem link>Nancy Meyers</MDBDropdownItem>
                      <MDBDropdownItem link>Kevin Kwapis</MDBDropdownItem>
                      <MDBDropdownItem link>William Wyler</MDBDropdownItem>
                      <MDBDropdownItem link>John Musker</MDBDropdownItem>
                      <MDBDropdownItem link>Taika Waititi</MDBDropdownItem>
                      <MDBDropdownItem link>Robert Zemeckis</MDBDropdownItem>
                      <MDBDropdownItem link>Jon M Chu</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>


                {/* <MDBInputGroup>
                  <MDBInput placeholder='Search' style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }} />
                  <MDBBtn rippleColor='dark' style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}>
                    <MDBIcon icon='search' />
                  </MDBBtn>
                </MDBInputGroup> */}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};