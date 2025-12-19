import { useState } from "react";

function ToggleColor() {
  const [isRed, setIsRed] = useState(true);

  // ✅ styles object INSIDE component
  const styles = {
    color: isRed ? "red" : "blue",
    fontSize: "20px",
    marginBottom:"10px",
    // backgroundColor: isRed ? "red" : "blue",
  };

  return (
    <>
      <h1 style={styles}>
        Color is {isRed ? "Red" : "Blue"}
      </h1>

      <button onClick={() => setIsRed(!isRed)} style={{backgroundColor:isRed ? "red":"blue",color:"white"}}>
        Toggle Color
      </button>
    </>
  );
}

export default ToggleColor;
