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

// import SimpleEffect from "./Hooks/Effect/SimpleEffect";

// import "bootstrap/dist/css/bootstrap.min.css";

// import ManualRoute from "./Routing/ManualRoutes";

// import Dashboard from "./Routing/ReactRouter/DashBoard";

// import Login from "./Routing/ReactRouter/Login";
import ReactRouter from "./Routing/ReactRouter";
import Login from "./Routing/ReactRouter/login";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactRouter />
  </StrictMode>
);