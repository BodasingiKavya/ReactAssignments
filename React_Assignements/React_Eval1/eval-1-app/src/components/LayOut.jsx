import { useTheme } from "../context/ThemeContext";
import PostList from "./PostList";


const LayOut =()=>{
  const {theme,toggleTheme}=useTheme();
  return(
    <div className={`app ${theme}`}>
      {console.log(theme)}
      <button onClick={toggleTheme}>Switch Theme</button>
      <PostList>    </PostList>
    </div>
  )
}

export default LayOut;