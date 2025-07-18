import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import Buttons from "./Events/Btns";
// import Form from "./Events/Form";

// import ArrayData from "./DisplayData/ArrayData";

// import PrimitiveData from "./Props/PrimitiveData";

// import MiniProject from "./MiniProject";

// import "./css.css";

// import "./mycss/main.css";
// import SimpleState from "./Hooks/State/SimpleState";

// import SimpleState2 from "./Hooks/State/SimpleState2";

// import FormState from "./Hooks/State/FormState";

// import SimpleEffects from "./Hooks/Effect/SimpleEffects";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Routing/ManualRoutes/Navigation";
import Home from "./Routing/ManualRoutes/Home";
import About from "./Routing/ManualRoutes/About";
import Contact from "./Routing/ManualRoutes/contact";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navigation/>
    <Home/>
    <About/>
    <Contact/>
  </StrictMode>
);
