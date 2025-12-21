import {createContext, useContext,useEffect,useState} from "react";
const PostContext = createContext();

export const PostsProvider = ({children})=>{
    const [posts,setPosts] = useState([]);
    useEffect( ()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(data=>setPosts(data.slice(0,20)));
    },[]);

    const updatePosts = (id,updatePosts)=>{
        setPosts(posts.map(p => (p.id === id ? {...p, ...updatePosts}:p)));
    }

    const deletedPosts = (id)=>{
        setPosts(posts.filter(p=>p.id !==id));
    }

    return (
        <PostContext.Provider value ={{posts,updatePosts,deletedPosts}}>
        {children}</PostContext.Provider>
    )
}

export const UsePosts = () =>{useContext(PostContext)};