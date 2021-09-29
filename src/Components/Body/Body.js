import { Container} from "react-bootstrap";
import "./Body.css";
import SideBar from "./SideBar/SideBar";
import MobileSubNavigation from "./SubNavigation/MobileSubNavigation";
import SubNavigation from "./SubNavigation/SubNavigation";

const Body = ({ children, setOpenModal, groupJoin, setGroupJoin,loginStatus}) => {
  
  return (
    <div className="main_body">
      <Container className="body_container">
        <div className="sticky">
          <SubNavigation loginStatus={loginStatus} groupJoin={groupJoin} setOpenModal={setOpenModal} setGroupJoin={setGroupJoin}/>
          <MobileSubNavigation loginStatus={loginStatus} groupJoin={groupJoin} setOpenModal={setOpenModal} setGroupJoin={setGroupJoin}/>
          <SideBar/>
        </div>
        <div className="body_section">{children}</div>
      </Container>
    </div>
  );
};

export default Body;
