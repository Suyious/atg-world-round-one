import PostCard from "./PostCard/PostCard"
import PostsList from "../../../data/postDb"

const Posts = () => {
    return (
        <div className="Posts">
            {PostsList.map((post)=>(
                <PostCard key={post.id} {...post}/>
            ))}
        </div >
    )
}

export default Posts
