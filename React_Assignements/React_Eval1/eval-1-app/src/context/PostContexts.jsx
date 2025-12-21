import {createContext, useContext,useEffect,useState} from "react";
const PostContext = createContext();

export const PostsProvider = ({children})=>{
    const [posts,setPosts] = useState([]);
    useEffect( ()=>{
        console.log("useEffect fetching posts");
        fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(data=>setPosts(data.slice(0,20)));
        console.log(posts);
    },[]);

    const updatePosts = (id,updatePosts)=>{
        console.log("updating post",id,updatePosts);
        setPosts(posts.map(p => (p.id === id ? {...p, ...updatePosts}:p)));
        console.log(posts);
    }

    const deletedPosts = (id)=>{
        setPosts(posts.filter(p=>p.id !==id));
    }

    return (
        <PostContext.Provider value ={{posts,updatePosts,deletedPosts}}>
        {children}</PostContext.Provider>
    )
}

export const UsePosts = () =>{
    console.log("usePosts", useContext(PostContext));
    
    return useContext(PostContext)};