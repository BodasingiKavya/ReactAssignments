import { PostsProvider } from "./components/PostContexts";
import PostList from "./components/PostList";
import { ThemeProvider, useTheme } from "./context/ThemeContext"

const LayOut =()=>{
  const {theme,setTheme}=useTheme();
  return(
    <div className={theme}>
      <button onClick={setTheme}>Switch Theme</button>
      <PostList/>
    </div>
  )
}

export default function App(){
  return (
    <>
      <ThemeProvider>
        <PostsProvider>
          <LayOut/>
        </PostsProvider>
      </ThemeProvider>
    </>
  )
}