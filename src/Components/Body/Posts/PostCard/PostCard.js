import { Button, Card } from "react-bootstrap";
import "./PostCard.css"

const PostCard = ({image}) => {
  return (
    <>
      <Card className="post_card" style={{}}>
        <Card.Img className="post_card_img" variant="top" src={image} />
        <Card.Body>
          <Card.Text>
          ✍️ Article
          </Card.Text>
          <Card.Title>What if famous brands had regular fonts? Meet RegulaBrands!</Card.Title>
          <Card.Text>
          I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default PostCard;
