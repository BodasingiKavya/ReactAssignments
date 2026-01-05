import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StyledButton from "./components/StyledButton";
import ImageHover from "./components/ImageHover";
import ResponsiveText from "./components/ResponsiveText";
import StyledList from "./components/StyledList";
import CardComponent from "./components/CardComponent";
import StyledTable from "./components/StyledTable";
import ContactForm from "./components/ContactForm";
import GridCards from "./components/GridCards";

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen space-y-10">
      <Navbar />
      <Hero />

      <div className="p-6 space-y-6">
        <StyledButton />
        <ImageHover />
        <ResponsiveText />
        <StyledList />
        <CardComponent />
        <StyledTable />
        <GridCards />
        <ContactForm />
      </div>
    </div>
  );
}
