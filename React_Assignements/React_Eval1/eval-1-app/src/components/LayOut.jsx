import { useTheme } from "../context/ThemeContext";
import PostList from "./PostList";


const LayOut =()=>{
  const {theme,toggleTheme}=useTheme();
  return(
    <div className={`app ${theme}`}>
      {console.log(theme)}
      <br></br>
      <button onClick={toggleTheme}>Switch Theme</button>
      <br/><br></br>
      <PostList>    </PostList>
    </div>
  )
}

export default LayOut;