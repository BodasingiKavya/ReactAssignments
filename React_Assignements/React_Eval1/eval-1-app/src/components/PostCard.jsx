import { useState } from "react";
import { UsePosts } from "../context/PostContexts"

export const PostCard=({posts})=>{
    if (!posts) return null;
    const {updatePost,deltePost}=UsePosts();
    const [editing,setEditing]=useState(false);
    const [title,setTitle]=useState(posts?.title || "");
    const  [body,setBody]=useState(posts?.body || "");

    const handleSave =()=>{updatePost (posts.id ,{title,body});
setEditing(false)}

return (
    <>
        <div className ="card">
            {editing ?(
                <>
                    <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    <textarea value ={body} onChange={(e)=>setBody(e.target.value)}/>
                    <button onClick={handleSave}>Save</button>
                </>
            )
            :(
                <>
                <h3>{posts.title}</h3>
                <p>{posts.body}</p>
                <button onClick={()=>setEditing(true)} className="edit">Edit</button>
                <button onClick={()=>deltePost(posts.id)} className="delete">Delete</button>
                </>
            )}
        </div>
    </>
)
}

export default PostCard;