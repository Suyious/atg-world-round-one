import PostCard from "./PostCard/PostCard"
import CardImg1 from "../../../assets/CardImg1.jpg"

const Posts = () => {
    return (
        <div className="Posts">
            <PostCard image={CardImg1}/>
            <PostCard image={CardImg1}/>
            <PostCard image={CardImg1}/>
            <PostCard image={CardImg1}/>
        </div >
    )
}

export default Posts
