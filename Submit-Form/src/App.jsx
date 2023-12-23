import NavBar from "./partials/navBar/nav-bar.jsx";
import Content from "./partials/content/content.jsx";
import FormSection from "./partials/form/formSection.jsx";
import "./App.css";

export default function App() {
  return (
    < div >
      <NavBar />
      <div className="innerDiv">
        <Content />
        <FormSection />
      </div>
    </div >
  );
}