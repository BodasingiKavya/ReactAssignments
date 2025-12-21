import LayOut from "./components/LayOut";
import { PostsProvider } from "./context/PostContexts";
import { ThemeProvider } from "./context/ThemeContext";

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