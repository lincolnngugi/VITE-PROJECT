import { BrowserRouter, Routes, Route } from "react-router-dom";

import All from "./All";
import Search from "./Search";
import Login  from "./login";

function ReactRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/all" element={<All />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ReactRouter;