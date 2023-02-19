import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import "./Navbar.css"
import {Link} from "react-router-dom";

function App(props) {
  let loginScreen = props.loginScreen ;
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="">Job Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to = "/" style = {{color : 'black', textDecoration : 'none',}}>  Home  </Link></Nav.Link>
              <Nav.Link><Link to = "/job-profiles" style = {{color : 'black', textDecoration : 'none',}}> Job Profiles </Link></Nav.Link>
            </Nav>
            {loginScreen ?   
            (<Nav>
              <NavDropdown title={<FontAwesomeIcon icon= {faUser}/>} id="collasible-nav-dropdown">
                <NavDropdown.Item ><Link to = "/profile" style = {{color : 'black', textDecoration : 'none',}}> Login </Link></NavDropdown.Item>
                <NavDropdown.Item><Link to = "/account" style = {{color : 'black', textDecoration : 'none',}}> Register </Link></NavDropdown.Item>
              </NavDropdown> 
            </Nav>) :
              (<Nav>
              <NavDropdown title={<FontAwesomeIcon icon= {faUser}/>} id="collasible-nav-dropdown">
                <NavDropdown.Item ><Link to = "/profile" style = {{color : 'black', textDecoration : 'none',}}> Profile </Link></NavDropdown.Item>
                <NavDropdown.Item><Link to = "/account" style = {{color : 'black', textDecoration : 'none',}}> Account </Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4"> Logout </NavDropdown.Item>
              </NavDropdown> 
            </Nav>)}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default App;
