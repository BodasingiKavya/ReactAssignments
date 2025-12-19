function TodoCard({ userId, title, completed }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "8px", padding: "8px",backgroundColor: "lightgrey" }}>
      <p><b>User ID:</b> {userId}</p>
      <p><b>Title:</b> {title}</p>
      <p><b>Status:</b> {completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
}

export default TodoCard;
