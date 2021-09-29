import { ButtonGroup, Dropdown, DropdownButton, Nav } from "react-bootstrap";

const MobileSubNavigation = ({loginStatus, groupJoin, setOpenModal, setGroupJoin}) => {
    return (
        <div className="sub_navigation mobile">
          <Nav as="ul">
            <Nav.Item as="li">
              <Nav.Link>All Posts(32)</Nav.Link>
            </Nav.Item>
          </Nav>
          <ButtonGroup className="sub_nav_buttons">
            <DropdownButton className="sub_nav_button" title="Filter(All)">
              <Dropdown.Item eventKey="1">Article</Dropdown.Item>
              <Dropdown.Item eventKey="2">Event</Dropdown.Item>
              <Dropdown.Item eventKey="2">Education</Dropdown.Item>
              <Dropdown.Item eventKey="2">Job</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </div>
    )
}

export default MobileSubNavigation
