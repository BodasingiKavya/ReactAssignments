import FeedbackForm from "./FeedBackForm";
import ImageSlider from "./ImageSlider";
import TodoApp from "./TodoApp";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-10">
      <FeedbackForm />
      <ImageSlider />
      <TodoApp />
    </div>
  );
}
