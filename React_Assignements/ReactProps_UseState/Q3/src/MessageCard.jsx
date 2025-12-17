function MessageCard({title,message}){

    return (
        <>
        
            <div style={{
                border: "1px solid #ccc",
      padding: "16px",
      margin: "10px",
      borderRadius: "8px",
      width: "250px",
      backgroundColor: 'grey',
            }}>
                <h2>{title}</h2>
                <p>{message}</p>
            </div>
        </>
    )

}

export default MessageCard;