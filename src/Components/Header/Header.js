import HeaderImg from "../../assets/HeaderImg.png"
import { Card, Container} from "react-bootstrap"
import "./Header.css"

const Header = () => {
  return(
    <>
      <Card className="header_card bg-dark text-white">
        <Card.Img src={HeaderImg} alt="Card Header"/>
        <Card.ImgOverlay className="header_card_overlay">
          <Container className="body_container">
            <Card.Title>Computer Engineering</Card.Title>
            <Card.Text>
              142,765 Computer Engineers follow this
            </Card.Text>
          </Container>
        </Card.ImgOverlay>
      </Card>
    </>
  )
}

export default Header
