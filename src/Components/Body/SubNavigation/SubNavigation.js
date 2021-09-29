import { Button, ButtonGroup, Dropdown, DropdownButton, Nav } from "react-bootstrap";

const SubNavigation = ({loginStatus, groupJoin, setOpenModal, setGroupJoin}) => {
    return (
        <div className="sub_navigation non_mobile">
          <Nav defaultActiveKey="link-0" as="ul">
            <Nav.Item as="li">
              <Nav.Link eventKey="link-0">All Posts(32)</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1">Article</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">Event</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-3">Education</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-4">Job</Nav.Link>
            </Nav.Item>
          </Nav>
          <ButtonGroup className="sub_nav_buttons">
            <DropdownButton className="sub_nav_button" title="Write a post">
              <Dropdown.Item eventKey="1">Article</Dropdown.Item>
              <Dropdown.Item eventKey="2">Picture</Dropdown.Item>
              <Dropdown.Item eventKey="2">Meetup</Dropdown.Item>
            </DropdownButton>
            <div className="sub_nav_button join_group">
              {(!loginStatus || !groupJoin)?<Button className="join" onClick={loginStatus?()=>setGroupJoin(true):()=>setOpenModal(true)}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.33333 9.16671H4.58333V6.41671H2.75V9.16671H0V11H2.75V13.75H4.58333V11H7.33333V9.16671ZM16.5 10.0834C18.0217 10.0834 19.2408 8.85504 19.2408 7.33337C19.2408 5.81171 18.0217 4.58337 16.5 4.58337C16.2067 4.58337 15.9225 4.62921 15.6658 4.71171C16.1883 5.45421 16.4908 6.35254 16.4908 7.33337C16.4908 8.31421 16.1792 9.20337 15.6658 9.95504C15.9225 10.0375 16.2067 10.0834 16.5 10.0834ZM11.9167 10.0834C13.4383 10.0834 14.6575 8.85504 14.6575 7.33337C14.6575 5.81171 13.4383 4.58337 11.9167 4.58337C10.395 4.58337 9.16667 5.81171 9.16667 7.33337C9.16667 8.85504 10.395 10.0834 11.9167 10.0834ZM17.985 12.0634C18.7458 12.7325 19.25 13.585 19.25 14.6667V16.5H22V14.6667C22 13.255 19.8275 12.3842 17.985 12.0634ZM11.9167 11.9167C10.0833 11.9167 6.41667 12.8334 6.41667 14.6667V16.5H17.4167V14.6667C17.4167 12.8334 13.75 11.9167 11.9167 11.9167Z" fill="white"/></svg>
                &#160;&#160;Join Group
              </Button>:
              <Button className="leave outline-dark" onClick={()=>setGroupJoin(false)}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.24917 14.2908L10.5417 15.5833L15.125 11L10.5417 6.41667L9.24917 7.70917L11.6142 10.0833H2.75V11.9167H11.6142L9.24917 14.2908ZM17.4167 2.75H4.58333C3.56583 2.75 2.75 3.575 2.75 4.58333V8.25H4.58333V4.58333H17.4167V17.4167H4.58333V13.75H2.75V17.4167C2.75 18.425 3.56583 19.25 4.58333 19.25H17.4167C18.425 19.25 19.25 18.425 19.25 17.4167V4.58333C19.25 3.575 18.425 2.75 17.4167 2.75Z" fill="#6A6A6B"/></svg>
                &#160;&#160;Leave Group
              </Button>}
            </div>
          </ButtonGroup>
        </div>
    )
}

export default SubNavigation
