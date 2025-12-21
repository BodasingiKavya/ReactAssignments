import { UsePosts } from "./PostContexts";

import { PostCard } from "./PostCard";

const PostList =()=>{
    const {posts} = UsePosts();
    return (
        <div className="grid">
            {posts.map(post=>(<PostCard key={post.id} post={post}></PostCard>))}
        </div>
    )
}

export default PostList;