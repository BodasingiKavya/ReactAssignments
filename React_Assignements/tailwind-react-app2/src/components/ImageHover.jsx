export default function ImageHover() {
  return (
    <div className="w-64 h-40 overflow-hidden rounded-lg shadow-lg">
      <img
        src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
        alt="sample"
        className="w-full h-full object-cover 
                   transition-transform duration-300 
                   hover:scale-105"
      />
    </div>
  );
}
