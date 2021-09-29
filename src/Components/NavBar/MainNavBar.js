import { Container, Form, FormControl, Navbar,  Dropdown, Image} from 'react-bootstrap';
import MainLogo from "../../assets/whole.png"
import profImg from "../../assets/ProfileImg4.jpg"
import "./MainNavBar.css"

const MainNavbar = ({setOpenModal, setModalLogin, loginStatus,setLoginStatus}) => {

  const handleAuthSwitch = (value) => {
    setModalLogin(value);
    setOpenModal(true);
  }

  return(
    <>
      <Navbar fixed="top" expand="lg">
        <Container className="nav_container" fluid="sm">
          <Navbar.Brand href="#home">
            <img alt="Main Logo" src={MainLogo}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="search_bar_wrapper">
              <Form className="collapse_component search_bar d-flex align-items-center">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.2083 12.8333H13.4842L13.2275 12.5858C14.1258 11.5408 14.6667 10.1842 14.6667 8.70833C14.6667 5.4175 11.9992 2.75 8.70833 2.75C5.4175 2.75 2.75 5.4175 2.75 8.70833C2.75 11.9992 5.4175 14.6667 8.70833 14.6667C10.1842 14.6667 11.5408 14.1258 12.5858 13.2275L12.8333 13.4842V14.2083L17.4167 18.7825L18.7825 17.4167L14.2083 12.8333ZM8.70833 12.8333C6.42583 12.8333 4.58333 10.9908 4.58333 8.70833C4.58333 6.42583 6.42583 4.58333 8.70833 4.58333C10.9908 4.58333 12.8333 6.42583 12.8333 8.70833C12.8333 10.9908 10.9908 12.8333 8.70833 12.8333Z" fill="#7A7A7A"/></svg>
                <FormControl type="search" placeholder="Search for your favorite groups in ATG" className="mr-2" aria-label="Search"
                />
              </Form>
            </div>
            <div className="dropdown_wrapper">
              {!loginStatus?<Dropdown className="collapse_component">
                <Dropdown.Toggle variant="none">Create account. <span className="dropdown_span">It’s free!</span></Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={()=>handleAuthSwitch(false)} href="#/action-2">Create Account</Dropdown.Item>
                  <Dropdown.Item onClick={()=>handleAuthSwitch(true)} href="#/action-1">Sign-In</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>:
              <Dropdown className="collapse_component">
                <Dropdown.Toggle variant="none">
                  <Image className="profile_image" src={profImg} roundedCircle/>
                  Siddharth Goyal
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={()=>setLoginStatus(false)} href="#/action-3">Log-Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>      
    </>
  ) 
}

export default MainNavbar;
