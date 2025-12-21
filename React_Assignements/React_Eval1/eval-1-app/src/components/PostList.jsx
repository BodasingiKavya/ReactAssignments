import { UsePosts } from "../context/PostContexts";

import { PostCard } from "./PostCard";

const PostList =()=>{
    const {posts} = UsePosts();
    console.log(posts);
    return (
        <div className="grid">
            {posts.map((post)=>(<PostCard key={post.id} posts={post}></PostCard>))}
        </div>
    )
}

export default PostList;